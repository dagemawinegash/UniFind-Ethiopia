from django.http import HttpResponse


def home_view(request):
    return HttpResponse(
        "<h1><center>This is Uni-Find-Ethiopia's Backend</center></h1>"
    )
