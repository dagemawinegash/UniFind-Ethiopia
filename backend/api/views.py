from rest_framework.views import APIView
from rest_framework.response import Response
from .models import University
from .serializers import UniversitySerializer
from rest_framework import status
from .permissions import SecretKeyPermission


class UniversityListView(APIView):
    permission_classes = [SecretKeyPermission]

    def get(self, request):
        universities = University.objects.all()
        serializer = UniversitySerializer(universities, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UniversitySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UniversityDetailView(APIView):
    permission_classes = [SecretKeyPermission]

    def get(self, request, pk):
        try:
            university = University.objects.get(pk=pk)
        except University.DoesNotExist:
            return Response({"detail": "Not found"}, status=404)

        serializer = UniversitySerializer(university)
      return Response(serializer.data)
