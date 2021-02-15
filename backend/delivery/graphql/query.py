import graphene

from delivery.graphql import types


class Query(graphene.ObjectType):
    me = graphene.Field(types.UserType)

    def resolve_me(self, info):
        if info.context.user.is_authenticated:
            return info.context.user

        return None
