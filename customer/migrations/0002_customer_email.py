# Generated by Django 4.1.7 on 2023-03-27 02:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customer', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customer',
            name='email',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
