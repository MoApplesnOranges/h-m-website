# Generated by Django 5.0.6 on 2024-06-17 00:32

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('commentbox', '0002_alter_customer_phone'),
    ]

    operations = [
        migrations.AddField(
            model_name='customer',
            name='date',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]