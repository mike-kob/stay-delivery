from django.contrib.auth.models import User
from graphene_django import DjangoObjectType

from delivery.models import Client, Restaurant, Courier, Location, Dish, Order, DishOrder, Tag


class ClientType(DjangoObjectType):
    class Meta:
        model = Client
        fields = (
            'id',
            'user',
            'name',
            'phone',
            'address',
            'card_number',
            'photo',
        )


class CourierType(DjangoObjectType):
    class Meta:
        model = Courier
        fields = (
            'id',
            'phone',
            'name',
            'photo',
        )


class LocationType(DjangoObjectType):
    class Meta:
        model = Location
        fields = (
            'id',
            'address',
            'restaurant',
        )


class RestaurantType(DjangoObjectType):
    class Meta:
        model = Restaurant
        fields = (
            'id',
            'name',
            'description',
            'locations',
            'dishes',
            'photo',
        )


class TagType(DjangoObjectType):
    class Meta:
        model = Tag
        fields = (
            'id',
            'name',
        )


class DishType(DjangoObjectType):
    class Meta:
        model = Dish
        fields = (
            'id',
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
            'id',
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
            'id',
            'dish',
            'order',
            'amount',
        )


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = (
            'id',
            'email',
            'client',
            'restaurant',
        )
