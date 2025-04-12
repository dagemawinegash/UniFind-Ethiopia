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
            university, created = University.objects.update_or_create(
                id=uni_data["id"],
                defaults={
                    "generalEnrollmentNumber": uni_data.get(
                        "generalEnrollmentNumber", ""
                    ),
                    "name": uni_data["name"],
                    "universityImage1": uni_data.get("universityImage1", ""),
                },
            )

            if created:
                for college_data in uni_data["colleges"]:
                    college = College.objects.create(
                        university=university, name=college_data["name"]
                    )
                    for major_data in college_data["majors"]:
                        Major.objects.create(
                            college=college,
                            name=major_data["name"],
                            creditHours=str(major_data.get("creditHours", "")),
                        )


if __name__ == "__main__":
    print("🚀 Updating universities with generalEnrollmentNumber...")
    update_universities()
    print("✅ Successfully updated database!")
