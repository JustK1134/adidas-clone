from django.db import models

# Create your models here.
class Api(models.Model):
    sampletext = models.CharField(max_length=100, default='sample text')