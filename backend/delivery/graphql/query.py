import graphene

from delivery.graphql import types
from delivery.models import Dish, Restaurant, Tag


class Query(graphene.ObjectType):
    me = graphene.Field(types.UserType)

    tags = graphene.List(types.TagType)

    dishes = graphene.List(types.DishType)
    dish = graphene.Field(types.DishType, id=graphene.Int(required=True))

    restaurants = graphene.List(types.RestaurantType)
    restaurant = graphene.List(types.RestaurantType, id=graphene.Int(required=True))

    orders = graphene.List(types.OrderType)

    def resolve_me(self, info):
        if info.context.user.is_authenticated:
            return info.context.user

        return None

    def resolve_tags(self, info):
        return Tag.objects.all()

    def resolve_dishes(self, info):
        return Dish.objects.all()

    def resolve_dish(self, id):
        return Dish.objects.filter(id=id).first()

    def resolve_restaurants(self):
        return Restaurant.objects.all()

    def resolve_resaurant(self, id):
        return Restaurant.objects.filter(id=id).first()

    def resolve_orders(self, info):
        user = info.context.user
        if not user.is_authenticated or not hasattr(user.restaurant):
            return []

        return user.restaurant.orders