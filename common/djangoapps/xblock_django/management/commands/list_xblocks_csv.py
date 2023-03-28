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
        self.stdout.write(f'entry_point, xblock_dir, class_name, file_path')
        for entry_point in get_xblocks_entry_points():
            xblock = entry_point.resolve()
            file_path = inspect.getfile(xblock)
            dir_name = get_directory_name_of_xblock(xblock)

            if dir_name:
                self.stdout.write(f'{entry_point.name}, {dir_name}, {xblock.__name__}, {file_path}')
