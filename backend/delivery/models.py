from datetime import datetime

from django.contrib.auth.models import User
from django.db import models


class Client(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.PROTECT,
        related_name='client',
        null=False, blank=False,
    )
    name = models.CharField(max_length=100, null=True, blank=True)
    phone = models.CharField(max_length=20, null=True, blank=True)
    address = models.CharField(max_length=200, null=True, blank=True)

    card_number = models.CharField(max_length=30, null=True, blank=True)
    photo = models.CharField(max_length=500, blank=True, null=True)


class Courier(models.Model):
    phone = models.CharField(max_length=13, null=False, blank=False)
    name = models.CharField(max_length=64, null=False, blank=False)
    photo = models.CharField(max_length=500, blank=True, null=True)

    def __str__(self):
        return f"{self.id} : phone {self.phone}, name {self.name}"


class Restaurant(models.Model):
    name = models.CharField(max_length=64)
    description = models.TextField(max_length=500)
    photo = models.CharField(max_length=500, blank=True, null=True)

    administrator = models.OneToOneField(
        User,
        on_delete=models.PROTECT,
        related_name='restaurant',
        null=False, blank=False,
    )

    def __str__(self):
        return f"{self.id} : name {self.name}, desc {self.description}"


class Location(models.Model):
    address = models.CharField(max_length=64)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name="locations")

    def __str__(self):
        return f"{self.id} : address {self.address}"


class Tag(models.Model):
    name = models.CharField(max_length=64, null=False, blank=False)

    def __str__(self):
        return f"{self.id}: name {self.name}"


class Dish(models.Model):
    name = models.CharField(max_length=64)
    description = models.TextField(null=True, blank=True)
    weight = models.IntegerField(null=True, blank=True)
    price = models.DecimalField(decimal_places=2, max_digits=7)
    photo = models.CharField(max_length=500, blank=True, null=True)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name="dishes")
    tags = models.ManyToManyField(Tag, null=True, blank=True)

    def __str__(self):
        return f"{self.id} : name {self.name}, desc {self.description}, " \
               f"weight {self.weight}"


class Order(models.Model):
    notes = models.CharField(max_length=64)
    paid = models.BooleanField(default=False)
    delivered = models.BooleanField(default=False)
    date = models.DateTimeField(default=datetime.now, blank=True)
    payment = models.BooleanField(default=False)
    courier = models.ForeignKey(Courier, on_delete=models.CASCADE, related_name="orders", default=1)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='orders')
    client = models.ForeignKey(Client, on_delete=models.CASCADE, related_name="orders")

    def __str__(self):
        return f"{self.id} : notes {self.notes}, paid {self.paid}, " \
               f"delivered {self.delivered}, date {self.date}, payment {self.payment}"


class DishOrder(models.Model):
    dish = models.ForeignKey(Dish, on_delete=models.CASCADE, related_name="dish_in_DishOrder")
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name="order_in_DishOrder")
    amount = models.IntegerField()

    def __str__(self):
        return f"{self.id}: amount {self.amount}"
