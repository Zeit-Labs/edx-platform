from import_shims.warn import warn_deprecated_import

warn_deprecated_import('student.management.commands.transfer_students', 'common.djangoapps.student.management.commands.transfer_students')

from common.djangoapps.student.management.commands.transfer_students import *
