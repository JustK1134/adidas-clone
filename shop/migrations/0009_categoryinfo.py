# Generated by Django 4.1.7 on 2023-04-03 07:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0008_rename_size_sock_kxl_shop_sizesock_kxl_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='CategoryInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('division', models.CharField(max_length=200)),
                ('title', models.CharField(max_length=200)),
                ('description', models.CharField(max_length=200)),
            ],
        ),
    ]
