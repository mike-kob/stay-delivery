import graphene as graphene
from django.core.exceptions import ValidationError
from django.utils import timezone

from delivery.graphql import inputs, types
from delivery.models import Dish, Restaurant, Order, DishOrder


class CreateDishMutation(graphene.Mutation):
    class Arguments:
        data = inputs.DishInput(required=True)

    ok = graphene.Boolean(required=True)
    errors = graphene.String(required=False)
    dish = graphene.Field(types.DishType)

    def mutate(self, info, data):
        user = info.context.user
        if not user.is_authenticated or not hasattr(user, 'restaurant'):
            return CreateDishMutation(ok=False, errors='Not authed')

        try:
            dish = Dish.objects.create(
                **data,
                restaurant=user.restaurant,
            )
            return CreateDishMutation(ok=True, dish=dish)
        except ValidationError as e:
            return CreateDishMutation(ok=False, errors=e.message)


class UpdateDishMutation(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        data = inputs.DishInput(required=True)

    ok = graphene.Boolean(required=True)
    errors = graphene.String(required=False)
    dish = graphene.Field(types.DishType)

    def mutate(self, info, id, data):
        user = info.context.user
        if not user.is_authenticated or not hasattr(user, 'restaurant'):
            return UpdateDishMutation(ok=False, errors='Not authed')

        try:
            dish = Dish.objects.get(id=id, restaurant_id=user.restaurant.id)
        except Dish.DoesNotExist:
            return UpdateDishMutation(ok=False, errors='Not found')

        for k, v in data.items():
            if v is not None:
                setattr(dish, k, v)

        try:
            dish.full_clean()
            dish.save()
        except ValidationError as e:
            return UpdateDishMutation(ok=False, errors=e.message)

        return UpdateDishMutation(ok=True, dish=dish)


class UpdateRestaurantMutation(graphene.Mutation):
    class Arguments:
        data = inputs.RestaurantInput(required=True)

    ok = graphene.Boolean(required=True)
    errors = graphene.String(required=False)
    restaurant = graphene.Field(types.RestaurantType)

    def mutate(self, info, id, data):
        user = info.context.user
        if not user.is_authenticated or hasattr(user, 'restaurant'):
            return UpdateRestaurantMutation(ok=False, errors='Not authed')

        try:
            restaurant = Restaurant.objects.get(id=user.restaurant.id)
        except Dish.DoesNotExist:
            return UpdateRestaurantMutation(ok=False, errors='Not found')

        for k, v in data.items():
            if v is not None:
                setattr(restaurant, k, v)

        try:
            restaurant.full_clean()
            restaurant.save()
        except ValidationError as e:
            return UpdateRestaurantMutation(ok=False, errors=e.message)

        return UpdateRestaurantMutation(ok=True, restaurant=restaurant)


class CreateOrderMutation(graphene.Mutation):
    class Arguments:
        data = inputs.OrderInput(required=True)

    ok = graphene.Boolean(required=True)
    errors = graphene.String(required=False)
    order = graphene.Field(types.OrderType)

    def mutate(self, info, data):
        user = info.context.user
        if not user.is_authenticated or not hasattr(user, 'client'):
            return CreateOrderMutation(ok=False, errors='Ви не авторизовані')

        order = Order.objects.create(
            notes=data['notes'],
            date=timezone.now(),
            client=user.client,
            restaurant_id=data['restaurant']
        )
        for dishOrderData in data.get('dish_orders', []):
            DishOrder.objects.create(
                order=order,
                dish_id=dishOrderData['dish'],
            )

        return CreateOrderMutation(ok=True, order=order)


class UpdateClientMutation(graphene.Mutation):
    class Arguments:
        data = inputs.ClientInput(required=True)

    ok = graphene.Boolean(required=True)
    errors = graphene.String(required=False)
    client = graphene.Field(types.ClientType, required=False)

    def mutate(self, info, data):
        user = info.context.user
        if not user.is_authenticated or not hasattr(user, 'client'):
            return UpdateClientMutation(ok=False, errors='Ви не авторизовані')
        client = user.client
        if data.phone:
            client.phone = data.phone
        if data.name:
            client.name = data.name
        if data.card:
            client.card_number = data.card
        if data.address:
            client.address = data.address
        client.full_clean()
        client.save()

        return UpdateClientMutation(ok=True, client=client)


class Mutation(graphene.ObjectType):

    create_dish = CreateDishMutation.Field()
    update_dish = UpdateDishMutation.Field()
    update_restaurant = UpdateRestaurantMutation.Field()
    update_client = UpdateClientMutation.Field()

    create_order = CreateOrderMutation.Field()
