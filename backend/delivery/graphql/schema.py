import graphene

from delivery.graphql.mutation import Mutation
from delivery.graphql.query import Query

schema = graphene.Schema(query=Query, mutation=Mutation)
