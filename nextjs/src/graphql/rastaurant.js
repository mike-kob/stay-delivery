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
    }
  }
}`;
