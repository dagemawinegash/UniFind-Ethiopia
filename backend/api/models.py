from django.db import models


class University(models.Model):
    name = models.CharField(max_length=200)
    nameAbbrivation = models.CharField(max_length=100)
    universityImage1 = models.CharField(max_length=100)
    location = models.CharField(max_length=200)
    cityLocation = models.CharField(max_length=100)
    mapLocation = models.CharField(max_length=100)
    mapImage = models.CharField(max_length=100)
    locationDescription = models.TextField()
    address = models.CharField(max_length=300)
    establishedIn = models.CharField(max_length=50)
    setting = models.CharField(max_length=100)
    type = models.CharField(max_length=50)
    duration = models.CharField(max_length=50)
    cityName = models.CharField(max_length=100)
    cityImage = models.CharField(max_length=100)
    officialWebsite = models.URLField(max_length=200)
    websitePrefix = models.CharField(max_length=100)
    UGRADenrollmentNumber = models.CharField(max_length=100)
    size = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    onCampusHousing = models.CharField(max_length=50)
    levelOfStudy = models.CharField(max_length=100)
    overviewDescription = models.TextField()
    majorsDescription = models.TextField()
    credit_points = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class College(models.Model):
    university = models.ForeignKey(
        University, related_name="colleges", on_delete=models.CASCADE
    )
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Major(models.Model):
    college = models.ForeignKey(
        College, related_name="majors", on_delete=models.CASCADE
    )
    name = models.CharField(max_length=200)
    creditHours = models.IntegerField()

    def __str__(self):
        return self.name
