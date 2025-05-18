from django.test import TestCase
from rest_framework.test import APIClient
from django.urls import reverse
from api.models import University
import os


class UniversityAPITest(TestCase):
    def setUp(self):
        # Ensure the SecretKeyPermission reads this value
        self.secret = "testsecret"
        os.environ["SECRET_KEY_PASSWORD"] = self.secret

        # Initialize API client
        self.client = APIClient()

        # a sample university for GET/detail tests
        self.uni = University.objects.create(
            name="Sample University",
            nameAbbrivation="SU",
            location="Test Location",
            cityLocation="Test City",
            mapLocation="Test Map",
            locationDescription="Description",
            address="Test address",
            establishedIn="2000",
            setting="Urban",
            type="Public",
            duration="4 years",
            officialWebsite="https://sample.edu",
            websitePrefix="sample",
            size="2000",
            status="Profit",
            onCampusHousing="Yes",
            levelOfStudy="Undergraduate",
            overviewDescription="Overview text",
            majorsDescription="Majors text",
            creditPoints="120",
        )

        # URLs for list and detail views
        self.list_url = reverse("university-list")
        self.detail_url = lambda pk: reverse("university-detail", args=[pk])

        # Valid payload for POST tests
        self.valid_payload = {
            "name": "New University",
            "nameAbbrivation": "NU",
            "location": "New Location",
            "cityLocation": "New City",
            "mapLocation": "New Map",
            "locationDescription": "New description",
            "address": "456 New St",
            "establishedIn": "1990",
            "setting": "Rural",
            "type": "Private",
            "duration": "3 years",
            "officialWebsite": "https://new.edu",
            "websitePrefix": "new",
            "size": "1500",
            "status": "Closed",
            "onCampusHousing": "No",
            "levelOfStudy": "Graduate",
            "overviewDescription": "Overview of new",
            "majorsDescription": "Majors of new",
            "creditPoints": "100",
            "colleges": [],
        }

    def authenticate(self):
        # Attach the correct secret key header to the client
        self.client.credentials(HTTP_X_SECRET_KEY=self.secret)

    def test_get_list_with_auth(self):
        self.authenticate()
        response = self.client.get(self.list_url)
        self.assertEqual(response.status_code, 200)
        self.assertIsInstance(response.data, list)

    def test_get_list_without_auth(self):
        response = self.client.get(self.list_url)
        self.assertEqual(response.status_code, 403)

    def test_post_with_auth_and_valid_data(self):
        self.authenticate()
        response = self.client.post(
            self.list_url, data=self.valid_payload, format="json"
        )
        self.assertEqual(response.status_code, 201)
        self.assertEqual(University.objects.count(), 2)
        self.assertEqual(response.data["name"], self.valid_payload["name"])

    def test_post_with_auth_and_invalid_data(self):
        self.authenticate()
        invalid_payload = self.valid_payload.copy()
        invalid_payload.pop("name")  # remove required field
        response = self.client.post(
            self.list_url,
            data=invalid_payload,
            format="json"
        )
        self.assertEqual(response.status_code, 400)
        self.assertIn("name", response.data)

    def test_post_without_auth(self):
        response = self.client.post(
            self.list_url, data=self.valid_payload, format="json"
        )
        self.assertEqual(response.status_code, 403)

    def test_get_detail_with_auth(self):
        self.authenticate()
        response = self.client.get(self.detail_url(self.uni.pk))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data["name"], self.uni.name)

    def test_get_detail_not_found(self):
        self.authenticate()
        response = self.client.get(self.detail_url(100))
        self.assertEqual(response.status_code, 404)

    def test_get_detail_without_auth(self):
        response = self.client.get(self.detail_url(self.uni.pk))
        self.assertEqual(response.status_code, 403)
