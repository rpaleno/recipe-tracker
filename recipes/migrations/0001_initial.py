# Generated by Django 5.1 on 2024-08-23 02:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('ingredients', models.TextField()),
                ('instructions', models.TextField()),
                ('preparation_time', models.DurationField()),
            ],
        ),
    ]
