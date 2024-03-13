from rest_framework import serializers
from .models import Events
from .models import Campaign
from .models import Branch
from .models import Subscribers
from .modesl import Donation

class EventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = '__all__'



class CampaignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Campaign
        fields = '__all__'


class BranchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Branch
        fields = '__all__'


class SubscribersSerializer(serializers.ModelSerializer):
    class Meta:
        model  =Subscribers
        fields = '__all__'


class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donation
        fields = '__all__'