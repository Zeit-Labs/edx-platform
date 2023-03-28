"""
List installed XBlocks.
"""

import inspect

from django.core.management.base import BaseCommand
from pathlib import Path

from ...api import get_xblocks_entry_points


def receding_path(p):
    path = Path(p)
    while path.parent != path:  # Stops when it reaches root file system root.parent == root
        yield path
        path = path.parent


def get_directory_name_of_xblock(xblock_class):
    file_path = inspect.getfile(xblock_class)
    for sub_path in receding_path(file_path):
        if str(sub_path.parent).endswith('site-packages'):
            return sub_path.name


class Command(BaseCommand):
    def handle(self, *args, **options):
        xblock_atlas_args = set()
        for entry_point in get_xblocks_entry_points():
            xblock = entry_point.resolve()
            file_path = inspect.getfile(xblock)
            dir_name = get_directory_name_of_xblock(xblock)
            if dir_name:
                xblock_atlas_args.add(f'xblock-translations/{dir_name}:{dir_name}')
            else:
                if 'edx-platform' in file_path:
                    self.stdout.write(f'INFO: Skipped edx-platform XBlock "{entry_point.name}" '
                                      f'xblock with path={file_path}')
                else:
                    self.stdout.write(f'ERROR: Skipped XBlock "{entry_point.name}" xblock with path={file_path} '
                                      f'due to unknown directory name')

        xblock_atlas_args_str = " ".join(sorted(xblock_atlas_args))
        self.stdout.write(f'atlas pull --filter="ar,fr_CA,de" {xblock_atlas_args_str}')
