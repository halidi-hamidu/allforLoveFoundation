from django.db import models
import uuid
from djrichtextfield.models import RichTextField
# Create your models here.
class Events(models.Model):
    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    event_photo = models.ImageField(upload_to='media')
    event_title = models.CharField(max_length=100)
    event_description = models.CharField(max_length=100)
    # never change once the object is created
    created_at = models.DateTimeField(auto_now_add=True)
    # always change when object is updated
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = 'Events List'

    def __str__(self):
        return str(self.event_title)


class Campaign(models.Model):
    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    campaign_photo = models.ImageField(upload_to='media/campaign')
    campaign_title = models.CharField(max_length=100)
    campaign_description = models.CharField(max_length=100)
    # never change once the object is created
    created_at = models.DateTimeField(auto_now_add=True)
    # always change when object is updated
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = 'Campaign List'

    def __str__(self):
        return str(self.campaign_title)

class Branch(models.Model):
    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    branch_photo = models.ImageField(upload_to='media/branch_img')
    branch_title = models.CharField(max_length = 100, )
    branch_location = models.CharField(max_length= 100, )
    number_of_children_poses = models.CharField(max_length = 100, )
    # never change once the object is created
    created_at = models.DateTimeField(auto_now_add=True)
    # always change when object is updated
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = 'Branches visited'

    def __str__(self):
        return str(self.branch_title)


class Subscribers(models.Model):
    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    subscribers_email = models.EmailField()

    class Meta:
        verbose_name_plural = 'Subscribers'

    def __str__(self):
        return str(self.subscribers_email)

class Donation(models.Model):

    id = models.UUIDField(
    primary_key=True, default=uuid.uuid4, editable=False, unique=True)  

    phone_number = models.IntegerField()

    class Meta:
        verbose_name_plural = "Donation list"

    def __str__(self):
        return str(self.phone_number)


class GetIntouch(models.Model):
    id = models.UUIDField(
    primary_key=True, default=uuid.uuid4, editable=False, unique=True)

    sender_name = models.CharField(max_length = 100)

    sender_email = models.EmailField()

    message_body = RichTextField()
