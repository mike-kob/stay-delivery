# Generated by Django 3.1.6 on 2021-02-14 07:32

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Client',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('phone', models.CharField(max_length=20)),
                ('address', models.CharField(max_length=200)),
                ('card_number', models.CharField(blank=True, max_length=30, null=True)),
                ('photo', models.CharField(blank=True, max_length=500, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='client', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Courier',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('phone', models.CharField(max_length=13)),
                ('name', models.CharField(max_length=64)),
                ('photo', models.CharField(blank=True, max_length=500, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Dish',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64)),
                ('description', models.CharField(blank=True, max_length=64, null=True)),
                ('weight', models.IntegerField(blank=True, null=True)),
                ('price', models.DecimalField(decimal_places=2, max_digits=7)),
                ('photo', models.CharField(blank=True, max_length=500, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64)),
            ],
        ),
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64)),
                ('description', models.CharField(max_length=500)),
                ('photo', models.CharField(blank=True, max_length=500, null=True)),
                ('administrator', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='administrator', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('notes', models.CharField(max_length=64)),
                ('paid', models.BooleanField(default=False)),
                ('delivered', models.BooleanField(default=False)),
                ('date', models.DateTimeField(blank=True, default=datetime.datetime.now)),
                ('payment', models.BooleanField(default=False)),
                ('client', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='orders', to='delivery.client')),
                ('courier', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='orders', to='delivery.courier')),
            ],
        ),
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.CharField(max_length=64)),
                ('restaurant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='locations', to='delivery.restaurant')),
            ],
        ),
        migrations.CreateModel(
            name='DishOrder',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.IntegerField()),
                ('dish', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='dish_in_DishOrder', to='delivery.dish')),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='order_in_DishOrder', to='delivery.order')),
            ],
        ),
        migrations.AddField(
            model_name='dish',
            name='restaurant',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='dishes', to='delivery.restaurant'),
        ),
        migrations.AddField(
            model_name='dish',
            name='tags',
            field=models.ManyToManyField(blank=True, null=True, to='delivery.Tag'),
        ),
    ]
