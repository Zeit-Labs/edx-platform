"""
This command downloads the translations for the XBlocks that are installed.
"""
import shutil
import stat
import subprocess
import os.path
import sys

import requests
from django.core.management.base import BaseCommand

from ...api import get_xblocks_entry_points


xblock_locale_dir = 'conf/xblocks/locale'

# TODO: Maybe move this into Makefile?
def download_atlas():
    """
    Download atlas into the Python virtual env `bin` directory.
    """
    directory = os.path.dirname(sys.executable)
    executable = os.path.join(directory, 'atlas')
    # atlas_url = "https://github.com/openedx/openedx-atlas/raw/main/atlas"
    atlas_url = "https://github.com/Zeit-Labs/openedx-atlas/raw/git/atlas"
    atlas_content = requests.get(atlas_url, allow_redirects=True).text
    with open(executable, 'w') as f:
        f.write(atlas_content)

    # make atlas executable
    os.chmod(executable, os.stat(executable).st_mode | stat.S_IXUSR)


class Command(BaseCommand):

    def add_arguments(self, parser):
        parser.add_argument(
            '--verbose|-v',
            action='store_true',
            default=False,
            dest='verbose',
            help='Verbose output.'
        )

    def handle(self, *args, **options):
        download_atlas()

        shutil.rmtree(xblock_locale_dir, ignore_errors=True)
        os.makedirs(xblock_locale_dir, exist_ok=True)

        xblock_atlas_args = set()
        for entry_point in get_xblocks_entry_points():
            xblock = entry_point.resolve()
            module_import_path = xblock.__module__
            parent_module, _rest = module_import_path.split('.', maxsplit=1)
            if parent_module == 'xmodule':
                if options['verbose']:
                    self.stdout.write(f'INFO: Skipped edx-platform XBlock "{entry_point.name}" '
                                      f'in module={module_import_path}')
            else:
                xblock_atlas_args.add(f'python-modules/{parent_module}:{parent_module}')

        xblock_atlas_args_list = list(sorted(xblock_atlas_args))

        # TODO: Maybe move this into Makefile or pavelib? I'm not sure if this is the right place.
        subprocess.run(['atlas',
                        'pull', '--filter', 'ar,fr_CA,de',
                        '--repository', 'Zeit-Labs/openedx-translations', '--branch', 'module-names',
                        ] + xblock_atlas_args_list,
                       cwd=xblock_locale_dir)
