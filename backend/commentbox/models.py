from django.db import models
import datetime
from django.utils import timezone

# from phonenumber_field.modelfields import PhoneNumberField


# Create your models here.
class Customer(models.Model):
    name = models.CharField(max_length=60)
    email = models.EmailField(max_length=250)
    phone = models.CharField(max_length=10)
    comment = models.CharField(max_length=400)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.name

    def when_published(self):
        return self.date >= timezone.now() - datetime.timedelta(days=1)
