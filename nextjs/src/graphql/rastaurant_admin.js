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
      id
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
  me {
    restaurant {
      dishes {
      id
      name
      description
      weight
        price
        photo
        tags {
          id
          name
        }
    }
      
    }
  }
}`;

export const GET_DISH_QUERY = `
query($id: Int!) {
  dish(id:$id) {
    id
    name
    description
    weight
    price
    photo
    tags {
      id
      name
    }
  }
}
`;

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
