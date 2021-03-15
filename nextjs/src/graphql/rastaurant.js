export const UPDATE_RESTAURANT_MUTATION = `
mutation(
  $name: String
  $description: String
  $photo: String
) {
  updateRestaurant(data:{
    name: $name
    description: $description
    photo: $photo
  }) {
    ok
    errors
    restaurant {
      name
      description
      photo
    }
  }
}`;

export const GET_RESTAURANT_QUERY = `
 query {
  me {
    restaurant {
      name
      description
      photo
      locations {
        id
        address
      }
    }
  }
}`;

export const GET_ORDERS_QUERY = `
    query {
    orders {
        id
        client {
            name
            phone
        }
        orderInDishorder {
            dish {
                name
                price
            }
            amount
        }
    }
}`;

export const GET_DISHES_QUERY = `
query {
  restaurant(id: $id) {
    dishes {
      name
    }
  }
}`;


export const REMOVE_ADDRESS_MUTATION = `
mutation($id: ID!) {
  removeLocation (id: $id) {
    ok
    errors
  }
}
`;

export const ADD_ADDRESS_MUTATION = `
mutation($address: String!) {
  addLocation (address: $address) {
    ok
    errors
    location {
      id
      address
    }
  }
}
`;
