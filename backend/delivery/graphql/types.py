from django.contrib.auth.models import User
from graphene_django import DjangoObjectType

from delivery.models import Client, Restaurant, Courier, Location, Dish, Order, DishOrder


class ClientType(DjangoObjectType):
    class Meta:
        model = Client
        fields = (
            'user',
            'phone',
            'address',
            'photo',
        )


class CourierType(DjangoObjectType):
    class Meta:
        model = Courier
        fields = (
            'phone',
            'name',
            'photo',
        )


class LocationType(DjangoObjectType):
    class Meta:
        model = Location
        fields = (
            'address',
            'restaurant',
        )


class RestaurantType(DjangoObjectType):
    class Meta:
        model = Restaurant
        fields = (
            'name',
            'description',
            'locations',
            'dishes',
            'photo',
        )


class TagType(DjangoObjectType):
    class Meta:
        model = Restaurant
        fields = (
            'name',
        )


class DishType(DjangoObjectType):
    class Meta:
        model = Dish
        fields = (
            'name',
            'description',
            'weight',
            'price',
            'photo',
            'restaurant',
            'tags',
        )


class OrderType(DjangoObjectType):
    class Meta:
        model = Order
        fields = (
            'notes',
            'paid',
            'delivered',
            'date',
            'payment',
            'restaurant',
            'client',
            'courier',
            'order_in_DishOrder',
        )


class DishOrderType(DjangoObjectType):
    class Meta:
        model = DishOrder
        fields = (
            'dish',
            'order',
            'amount',
        )


class UserType(DjangoObjectType):

    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'first_name',
            'email',
            'client',
            'administrator',
        )
