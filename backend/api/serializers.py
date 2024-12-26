from rest_framework import serializers
from .models import University, College, Major


class MajorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Major
        fields = ["id", "name", "creditHours"]


class CollegeSerializer(serializers.ModelSerializer):
    majors = MajorSerializer(many=True)

    class Meta:
        model = College
        fields = ["id", "name", "majors"]


class UniversitySerializer(serializers.ModelSerializer):
    colleges = CollegeSerializer(many=True)

    class Meta:
        model = University
        fields = [
            "id",
            "name",
            "nameAbbrivation",
            "universityImage1",
            "location",
            "cityLocation",
            "mapLocation",
            "mapImage",
            "locationDescription",
            "address",
            "establishedIn",
            "setting",
            "type",
            "duration",
            "cityName",
            "cityImage",
            "officialWebsite",
            "websitePrefix",
            "UGRADenrollmentNumber",
            "size",
            "status",
            "onCampusHousing",
            "levelOfStudy",
            "overviewDescription",
            "majorsDescription",
            "credit_points",
            "colleges",
        ]
