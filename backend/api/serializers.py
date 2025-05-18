from rest_framework import serializers
from .models import University, College, Major


class MajorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Major
        fields = ["id", "name", "creditHours", "ECTS"]


class CollegeSerializer(serializers.ModelSerializer):
    majors = MajorSerializer(many=True)

    class Meta:
        model = College
        fields = ["id", "name", "majors"]

    def create(self, validated_data):
        majors_data = validated_data.pop("majors", [])
        college = College.objects.create(**validated_data)

        for major_data in majors_data:
            Major.objects.create(college=college, **major_data)

        return college


class UniversitySerializer(serializers.ModelSerializer):
    colleges = CollegeSerializer(many=True)

    class Meta:
        model = University
        fields = [
            "id",
            "name",
            "nameAbbrivation",
            "universityImage1",
            "universityImage2",
            "location",
            "cityLocation",
            "mapLocation",
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
            "generalEnrollmentNumber",
            "size",
            "status",
            "onCampusHousing",
            "levelOfStudy",
            "overviewDescription",
            "majorsDescription",
            "creditPoints",
            "colleges",
        ]

    def create(self, validated_data):
        colleges_data = validated_data.pop("colleges", [])
        university = University.objects.create(**validated_data)

        for college_data in colleges_data:
            majors_data = college_data.pop("majors", [])
            college = College.objects.create(university=university, **college_data)

            for major_data in majors_data:
                Major.objects.create(college=college, **major_data)

        return university
