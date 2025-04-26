import os
import json
import django
from django.db import transaction

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.deployment_settings")
django.setup()

from api.models import University, College, Major


def update_ects_values():
    with open("universities.json", "r") as f:
        universities = json.load(f)

    with transaction.atomic():
        for uni_data in universities:
            for college_data in uni_data["colleges"]:
                for major_data in college_data["majors"]:
                    if "ECTS" in major_data:
                        major = Major.objects.get(
                            name=major_data["name"],
                            college__name=college_data["name"],
                            college__university__id=uni_data["id"],
                        )
                        if major_data["ECTS"]:
                            major.ECTS = str(major_data["ECTS"])
                            major.save()


if __name__ == "__main__":
    print("🚀 Starting ECTS updates...")
    update_ects_values()
    print("✅ Successfully updated ECTS values!")
