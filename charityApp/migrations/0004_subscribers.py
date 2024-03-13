# Generated by Django 4.1.7 on 2024-03-13 08:57

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('charityApp', '0003_branch'),
    ]

    operations = [
        migrations.CreateModel(
            name='Subscribers',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('subscribers_email', models.EmailField(max_length=254)),
            ],
            options={
                'verbose_name_plural': 'Subscribers',
            },
        ),
    ]
