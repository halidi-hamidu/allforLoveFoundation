from rest_framework import serializers
from .models import Events
from .models import Campaign
from .models import Branch
from .models import Subsrcibers

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


class SubsrcibersSerializer(serializers.ModelSerializer):
    class Meta:
        model  =Subsrcibers
        fields = '__all__'