import graphene

from delivery.graphql.query import Query

schema = graphene.Schema(query=Query)
