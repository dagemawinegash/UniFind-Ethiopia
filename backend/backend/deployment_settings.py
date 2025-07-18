import os
import dj_database_url
from .settings import *  # noqa: F403,F401

RENDER_HOSTNAME = os.environ.get("RENDER_EXTERNAL_HOSTNAME", "")

ALLOWED_HOSTS = [RENDER_HOSTNAME] if RENDER_HOSTNAME else []

CSRF_TRUSTED_ORIGINS = (
    [f"https://{RENDER_HOSTNAME}"] if RENDER_HOSTNAME else []
)

DEBUG = False
SECRET_KEY = os.environ.get("SECRET_KEY", "testsecret")

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]


CORS_ALLOWED_ORIGINS = [
    "https://unifind-ethiopia.onrender.com",
]


STORAGES = {
    "default": {
        "BACKEND": "django.core.files.storage.FileSystemStorage",
    },
    "staticfiles": {
        "BACKEND": "whitenoise.storage.CompressedStaticFilesStorage",
    },
}

DATABASES = {
    "default": dj_database_url.config(
        default=os.environ.get("DATABASE_URL"),
        conn_max_age=600,
    )
}
