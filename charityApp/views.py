from django.shortcuts import render
from django.http import HttpResponse
from .models import Events
from .models import Campaign
from .serializer import EventsSerializer
from .serializer import CampaignSerializer
from rest_framework import generics

# Create your views here.


# start: Events
class EventsListView(generics.ListCreateAPIView):
    queryset  = Events.objects.all()
    serializer_class = EventsSerializer

class EventsAPIView(generics.RetrieveUpdateDestroyAPIView):
  queryset = Events.objects.all()
  serializer_class = EventsSerializer

# end: Events

#start: Campaign
class CampaignListView(generics.ListCreateAPIView):
    queryset  = Campaign.objects.all()
    serializer_class = CampaignSerializer


class CampaignAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset  = Campaign.objects.all()
    serializer_class = CampaignSerializer

# end: Campaign