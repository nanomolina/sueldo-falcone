from django.conf.urls import url

from views import InConstruction

urlpatterns = [
    url(r'^$', InConstruction.as_view()),
]
