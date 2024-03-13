# Generated by Django 4.1.7 on 2024-03-13 07:13

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('charityApp', '0002_campaign'),
    ]

    operations = [
        migrations.CreateModel(
            name='Branch',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('branch_photo', models.ImageField(upload_to='media/branch_img')),
                ('branch_title', models.CharField(max_length=100)),
                ('branch_location', models.CharField(max_length=100)),
                ('number_of_children_poses', models.CharField(max_length=100)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name_plural': 'Branches visited',
            },
        ),
    ]
