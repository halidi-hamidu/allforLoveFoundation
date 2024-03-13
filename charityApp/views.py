from django.shortcuts import render
from django.http import HttpResponse
from .models import Events
from .models import Campaign
from .models import Branch
from .serializer import EventsSerializer
from .serializer import CampaignSerializer
from .serializer import BranchSerializer
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

# start:Branch
class BranchListView(generics.ListCreateAPIView):
    queryset = Branch.objects.all()
    serializer_class = BranchSerializer

class BranchAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Branch.objects.all()
    serializer_class = BranchSerializer

# end:Branch


# start:Subsrcibers
class SubsrcibersListView(generics.ListCreateAPIView):
    queryset = Subsrcibers.objects.all()
    serializer_class = SubsrcibersSerializer



class SubsrcibersAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Subsrcibers.objects.all()
    serializer_class = SubsrcibersSerializer

# end: Subsrcibers