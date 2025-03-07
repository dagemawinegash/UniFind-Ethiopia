# Generated by Django 5.1.4 on 2024-12-27 12:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="major",
            name="ECTS",
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="university",
            name="generalEnrollmentNumber",
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name="major",
            name="creditHours",
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name="university",
            name="UGRADenrollmentNumber",
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name="university",
            name="cityImage",
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
