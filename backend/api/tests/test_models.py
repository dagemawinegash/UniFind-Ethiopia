from django.test import TestCase # for isolated test DB 
from api.models import University, College


class UniversityModelTest(TestCase):
    # uses for fresh start in the DB
    def setUp(self):
        self.uni = University.objects.create(
            name="Test Uni",
            nameAbbrivation="TU",
            location="Nowhere",
            cityLocation="Nowhere City",
            mapLocation="N/A",
            locationDescription="Desc",
            address="123 Test St",
            establishedIn="1900",
            setting="Urban",
            type="Public",
            duration="4 years",
            officialWebsite="https://test.edu",
            websitePrefix="test",
            size="1000",
            status="Open",
            onCampusHousing="Yes",
            levelOfStudy="Undergraduate",
            overviewDescription="Overview",
            majorsDescription="Majors",
            creditPoints="120",
        )

    def test_str_returns_name(self):
        self.assertEqual(str(self.uni), "Test Uni")

    def test_college_relationship(self):
        college = College.objects.create(university=self.uni, name="College of Testing")
        # accessing reverse relationship
        self.assertIn(college, self.uni.colleges.all())
