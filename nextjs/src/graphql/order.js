export const CREATE_ORDER_MUTATION = `
mutation(
  $notes: String
  $restaurant: ID
  $dishOrders: [DishOrderInput]
) {
  createOrder(data: {
    notes: $notes,
    restaurant: $restaurant,
    dishOrders: $dishOrders
  }) {
    ok
    errors
    order {
      id
      notes
      date
      restaurant {
        name
      }
      orderInDishorder {
        id
        dish {
          id
          name
        }
        amount
      }
    }
  }
}
`;
