from django.urls import path, include

from . import views
from .views import EventsListView
from .views import EventsAPIView
from .views import CampaignListView
from .views import CampaignAPIView
from .views import BranchListView
from .views import BranchAPIView
app_name = 'charityApp'

urlpatterns = [
    path('', EventsListView.as_view(), name = 'eventsList'),
    path('event/<uuid:pk>/', EventsAPIView.as_view(), name = 'event'),
    path('campaign', CampaignListView.as_view(), name = 'campaign'),
    path('campaign/<uuid:pk>/', CampaignAPIView.as_view(), name = 'campaign'),
    path('branch/', BranchListView.as_view(), name = 'branchList'),
    path('branch/<uuid:pk>/', BranchAPIView.as_view(), name = 'branch'),
]
    