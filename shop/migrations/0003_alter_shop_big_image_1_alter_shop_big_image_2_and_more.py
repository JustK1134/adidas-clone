# Generated by Django 4.1.7 on 2023-03-25 06:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0002_remove_shop_size_shop_size_10uk_shop_size_11uk_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shop',
            name='big_image_1',
            field=models.CharField(default=None, max_length=200),
        ),
        migrations.AlterField(
            model_name='shop',
            name='big_image_2',
            field=models.CharField(default=None, max_length=200),
        ),
        migrations.AlterField(
            model_name='shop',
            name='big_image_3',
            field=models.CharField(default=None, max_length=200),
        ),
        migrations.AlterField(
            model_name='shop',
            name='big_image_4',
            field=models.CharField(default=None, max_length=200),
        ),
        migrations.AlterField(
            model_name='shop',
            name='big_image_5',
            field=models.CharField(default=None, max_length=200),
        ),
        migrations.AlterField(
            model_name='shop',
            name='big_image_6',
            field=models.CharField(default=None, max_length=200),
        ),
        migrations.AlterField(
            model_name='shop',
            name='big_image_7',
            field=models.CharField(default=None, max_length=200),
        ),
        migrations.AlterField(
            model_name='shop',
            name='big_image_8',
            field=models.CharField(default=None, max_length=200),
        ),
        migrations.AlterField(
            model_name='shop',
            name='color',
            field=models.CharField(default=None, max_length=200),
        ),
        migrations.AlterField(
            model_name='shop',
            name='division',
            field=models.CharField(default=None, max_length=200),
        ),
        migrations.AlterField(
            model_name='shop',
            name='main_image',
            field=models.CharField(default=None, max_length=200),
        ),
        migrations.AlterField(
            model_name='shop',
            name='price',
            field=models.IntegerField(default=1),
        ),
        migrations.AlterField(
            model_name='shop',
            name='product_type',
            field=models.CharField(default=None, max_length=200),
        ),
        migrations.AlterField(
            model_name='shop',
            name='productname',
            field=models.CharField(default=None, max_length=200),
        ),
        migrations.AlterField(
            model_name='shop',
            name='second_image',
            field=models.CharField(default=None, max_length=200),
        ),
        migrations.AlterField(
            model_name='shop',
            name='small_image_1',
            field=models.CharField(default=None, max_length=200),
        ),
        migrations.AlterField(
            model_name='shop',
            name='small_image_10',
            field=models.CharField(default=None, max_length=200),
        ),
        migrations.AlterField(
            model_name='shop',
            name='small_image_2',
            field=models.CharField(default=None, max_length=200),
        ),
        migrations.AlterField(
            model_name='shop',
            name='small_image_3',
            field=models.CharField(default=None, max_length=200),
        ),
        migrations.AlterField(
            model_name='shop',
            name='small_image_4',
            field=models.CharField(default=None, max_length=200),
        ),
        migrations.AlterField(
            model_name='shop',
            name='small_image_5',
            field=models.CharField(default=None, max_length=200),
        ),
        migrations.AlterField(
            model_name='shop',
            name='small_image_6',
            field=models.CharField(default=None, max_length=200),
        ),
        migrations.AlterField(
            model_name='shop',
            name='small_image_7',
            field=models.CharField(default=None, max_length=200),
        ),
        migrations.AlterField(
            model_name='shop',
            name='small_image_8',
            field=models.CharField(default=None, max_length=200),
        ),
        migrations.AlterField(
            model_name='shop',
            name='small_image_9',
            field=models.CharField(default=None, max_length=200),
        ),
        migrations.AlterField(
            model_name='shop',
            name='sport',
            field=models.CharField(default=None, max_length=200),
        ),
    ]
