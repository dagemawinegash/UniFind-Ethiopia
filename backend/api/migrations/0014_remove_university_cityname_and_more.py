# Generated by Django 5.1.4 on 2025-03-02 16:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0013_alter_university_cityimage_and_more"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="university",
            name="cityName",
        ),
        migrations.AlterField(
            model_name="university",
            name="universityImage1",
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name="university",
            name="universityImage2",
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
    ]
