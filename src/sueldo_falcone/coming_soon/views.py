from django.shortcuts import render
from django.views.generic import TemplateView

class InConstruction(TemplateView):
    template_name = "coming_soon/index.html"
