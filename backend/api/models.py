from django.db import models


class University(models.Model):
    name = models.CharField(max_length=200)
    nameAbbrivation = models.CharField(max_length=100)
    universityImage1 = models.ImageField(upload_to="images/", blank=True, null=True)
    universityImage2 = models.ImageField(upload_to="images/", blank=True, null=True)
    location = models.CharField(max_length=200)
    cityLocation = models.CharField(max_length=150)
    mapLocation = models.CharField(max_length=150)
    mapImage = models.ImageField(upload_to="images/", blank=True, null=True)
    locationDescription = models.TextField()
    address = models.CharField(max_length=300)
    establishedIn = models.CharField(max_length=70)
    setting = models.CharField(max_length=100)
    type = models.CharField(max_length=50)
    duration = models.CharField(max_length=50)
    cityName = models.CharField(max_length=100, blank=True, null=True)
    cityImage = models.ImageField(upload_to="images/", blank=True, null=True)
    officialWebsite = models.URLField(max_length=200)
    websitePrefix = models.CharField(max_length=100)
    UGRADenrollmentNumber = models.CharField(max_length=100, blank=True, null=True)
    generalEnrollmentNumber = models.CharField(max_length=100, blank=True, null=True)
    size = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    onCampusHousing = models.CharField(max_length=50)
    levelOfStudy = models.CharField(max_length=100)
    overviewDescription = models.TextField()
    majorsDescription = models.TextField()
    creditPoints = models.CharField(max_length=100)

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
    creditHours = models.IntegerField(blank=True, null=True)
    ECTS = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.name
