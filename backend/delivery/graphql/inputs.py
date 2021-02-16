import graphene


class DishInput(graphene.InputObjectType):
    name = graphene.String()
    description = graphene.String()
    weight = graphene.Int()
    price = graphene.Decimal()
    photo = graphene.String()


class RestaurantInput(graphene.InputObjectType):
    name = graphene.String()
    description = graphene.String()
    photo = graphene.String()


class DishOrderInput(graphene.InputObjectType):
    dish = graphene.ID()
    amount = graphene.Int()


class OrderInput(graphene.InputObjectType):
    notes = graphene.String()
    restaurant = graphene.ID()
    dish_orders = graphene.List(DishOrderInput)
