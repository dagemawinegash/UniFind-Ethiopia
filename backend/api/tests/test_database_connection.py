from django.test import TestCase
from django.conf import settings
from django.db import connections
from django.db.utils import OperationalError


class DatabaseConnectionTest(TestCase):
    def test_default_database_connection(self):
        engine = settings.DATABASES["default"]["ENGINE"]
        print(f"Database engine in use: {engine}")

        conn = connections["default"]
        try:
            conn.cursor()
        except OperationalError as e:
            self.fail(f"Database connection failed ({engine}): {e}")
