from django.shortcuts import render
from django.http import HttpResponse
from .models import Events
from .models import Campaign
from .models import Branch
from .models import Subscribers
from .models import Donation
from .serializer import EventsSerializer
from .serializer import CampaignSerializer
from .serializer import BranchSerializer
from .serializer import SubscribersSerializer
from .serializer import DonationSerializer
from rest_framework import generics
import logging
# Create your views here.


logger = logging.getLogger(__name__)
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
class SubscribersListView(generics.ListCreateAPIView):
    queryset = Subscribers.objects.all()
    serializer_class = SubscribersSerializer

    def perform_create(self, serializer):
        print("====Data received in SubscribersListView: %s", self.request.data['subscribers_email'])
        serializer.save()



class SubscribersAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Subscribers.objects.all()
    serializer_class = SubscribersSerializer

# end: Subsrcibers

# start:Donation
class DonationListAPIView(generics.ListCreateAPIView):
    queryset = Donation.objects.all()
    serializer_class = DonationSerializer



class DonationAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Donation.objects.all()
    serializer_class = DonationSerializer

# # end:Donation