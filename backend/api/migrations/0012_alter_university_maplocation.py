# Generated by Django 5.1.4 on 2024-12-31 11:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0011_alter_university_maplocation"),
    ]

    operations = [
        migrations.AlterField(
            model_name="university",
            name="mapLocation",
            field=models.CharField(max_length=500),
        ),
    ]
