import os
from dotenv import load_dotenv
from rest_framework import permissions

load_dotenv()


class SecretKeyPermission(permissions.BasePermission):
    def has_permission(self, request, view):
        secret_key = request.headers.get("X-Secret-Key")
        env_secret_key = os.getenv("SECRET_KEY_PASSWORD")
        return secret_key == env_secret_key
