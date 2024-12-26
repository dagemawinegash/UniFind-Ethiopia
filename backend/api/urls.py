from django.urls import path
from .views import UniversityListView, UniversityDetailView

urlpatterns = [
    path("universities/", UniversityListView.as_view(), name="university-list"),
    path(
        "universities/<int:pk>/",
        UniversityDetailView.as_view(),
        name="university-detail",
    ),
]
