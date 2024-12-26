from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import University
from .serializers import UniversitySerializer


class UniversityListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        universities = University.objects.all()
        serializer = UniversitySerializer(universities, many=True)
        return Response(serializer.data)


class UniversityDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        try:
            university = University.objects.get(pk=pk)
        except University.DoesNotExist:
            return Response({"detail": "Not found"}, status=404)

        serializer = UniversitySerializer(university)
        return Response(serializer.data)
