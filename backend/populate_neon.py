import os
import json
import django
from django.db import transaction

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.deployment_settings")
django.setup()

from api.models import University, College, Major


def populate_database():
    with open("universities.json", "r") as f:
        universities = json.load(f)

    with transaction.atomic():
        for uni_data in universities:
            university = University.objects.create(
                id=uni_data["id"],
                name=uni_data["name"],
                nameAbbrivation=uni_data["nameAbbrivation"],
                universityImage1=uni_data.get("universityImage1", ""),
                location=uni_data["location"],
                cityLocation=uni_data["cityLocation"],
                mapLocation=uni_data["mapLocation"],
                locationDescription=uni_data["locationDescription"],
                address=uni_data["address"],
                establishedIn=uni_data["establishedIn"],
                setting=uni_data["setting"],
                type=uni_data["type"],
                duration=uni_data["duration"],
                cityName=uni_data.get("cityName", ""),
                cityImage=uni_data.get("cityImage", ""),
                officialWebsite=uni_data["officialWebsite"],
                websitePrefix=uni_data["websitePrefix"],
                UGRADenrollmentNumber=uni_data.get("UGRADenrollmentNumber", ""),
                size=uni_data["size"],
                status=uni_data["status"],
                onCampusHousing=uni_data["onCampusHousing"],
                levelOfStudy=uni_data["levelOfStudy"],
                overviewDescription=uni_data["overviewDescription"],
                majorsDescription=uni_data["majorsDescription"],
                creditPoints=uni_data["creditPoints"],
            )

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
    print("🚀 Starting database population...")
    populate_database()
    print("✅ Successfully populated database!")
