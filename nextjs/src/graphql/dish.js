export const CREATE_DISH_MUTATION = `
mutation(
  $name: String
  $description: String
  $weight: Int
  $price: Decimal
  $photo: String
) {
  createDish(data: {
    name: $name,
    description: $description,
    weight: $weight,
    price: $price
    photo: $photo
  }) {
    ok
    errors
    dish {
      id
      name
      description
      weight
      price
      photo
      restaurant {
        id
        name
      }
    }
  }
}
`;

export const UPDATE_DISH_MUTATION = `
mutation(
  $id: ID!
  $name: String
  $description: String
  $weight: Int
  $price: Decimal
  $photo: String
) {
  updateDish(id: $id, data: {
    name: $name,
    description: $description,
    weight: $weight,
    price: $price
    photo: $photo
  }) {
    ok
    errors
    dish {
      id
      name
      description
      weight
      price
      photo
      restaurant {
        id
        name
      }
    }
  }
}
`;

export const UPDATE_RESTAURANT_MUTATION = `
mutation(
  $name: String
  $description: String
  $photo: String
) {
  updateRestaurant(data: {
    name: $name,
    description: $description,
    photo: $photo
  }) {
    ok
    errors
    restaurant {
      id
      name
      description
      photo
      locations {
        id
        address
      }
      dishes {
        id
        name
        description
        weight
        price
        photo
        tags {
          name
        }
      }
    }
  }
}
`;

export const GET_DISHES_QUERY = `
query ($tag: ID) {
  dishes (tag: $tag) {
    id
    name
    price
    photo
    restaurant {
      id
      name
    }
  }
}
`;
