# Generated by Django 5.1.4 on 2024-12-26 18:28

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="College",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name="University",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=200)),
                ("nameAbbrivation", models.CharField(max_length=100)),
                ("universityImage1", models.CharField(max_length=100)),
                ("location", models.CharField(max_length=200)),
                ("cityLocation", models.CharField(max_length=100)),
                ("mapLocation", models.CharField(max_length=100)),
                ("mapImage", models.CharField(max_length=100)),
                ("locationDescription", models.TextField()),
                ("address", models.CharField(max_length=300)),
                ("establishedIn", models.CharField(max_length=50)),
                ("setting", models.CharField(max_length=100)),
                ("type", models.CharField(max_length=50)),
                ("duration", models.CharField(max_length=50)),
                ("cityName", models.CharField(max_length=100)),
                ("cityImage", models.CharField(max_length=100)),
                ("officialWebsite", models.URLField()),
                ("websitePrefix", models.CharField(max_length=100)),
                ("UGRADenrollmentNumber", models.CharField(max_length=100)),
                ("size", models.CharField(max_length=100)),
                ("status", models.CharField(max_length=100)),
                ("onCampusHousing", models.CharField(max_length=50)),
                ("levelOfStudy", models.CharField(max_length=100)),
                ("overviewDescription", models.TextField()),
                ("majorsDescription", models.TextField()),
                ("credit_points", models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name="Major",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=200)),
                ("creditHours", models.IntegerField()),
                (
                    "college",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="majors",
                        to="api.college",
                    ),
                ),
            ],
        ),
        migrations.AddField(
            model_name="college",
            name="university",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="colleges",
                to="api.university",
            ),
        ),
    ]
