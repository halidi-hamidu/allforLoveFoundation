# Generated by Django 4.1.7 on 2024-03-14 08:08

from django.db import migrations, models
import djrichtextfield.models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('charityApp', '0005_donation'),
    ]

    operations = [
        migrations.CreateModel(
            name='GetIntouch',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('sender_name', models.CharField(max_length=100)),
                ('sender_email', models.EmailField(max_length=254)),
                ('message_body', djrichtextfield.models.RichTextField()),
            ],
        ),
    ]
