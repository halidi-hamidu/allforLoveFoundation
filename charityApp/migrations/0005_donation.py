# Generated by Django 4.1.7 on 2024-03-13 11:01

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('charityApp', '0004_subscribers'),
    ]

    operations = [
        migrations.CreateModel(
            name='Donation',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('phone_number', models.IntegerField()),
            ],
            options={
                'verbose_name_plural': 'Donation list',
            },
        ),
    ]