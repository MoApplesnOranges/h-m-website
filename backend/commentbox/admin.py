from django.contrib import admin
from .models import Customer


# Register your models here.
class CustomerDisplay(admin.ModelAdmin):
    list_display = ("name", "date")


admin.site.register(Customer, CustomerDisplay)
