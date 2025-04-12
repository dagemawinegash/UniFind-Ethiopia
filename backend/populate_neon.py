import os
import json
import django
from django.db import transaction

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.deployment_settings")
django.setup()

from api.models import University, College, Major


def update_universities():
    with open("universities.json", "r") as f:
        universities = json.load(f)

    with transaction.atomic():
        for uni_data in universities:
            University.objects.filter(id=uni_data["id"]).update(
                universityImage2=uni_data.get("universityImage2", "")
            )


if __name__ == "__main__":
    print("🖼️ Adding universityImage2 to existing records...")
    update_universities()
    print("✅ Successfully updated university images!")
