export const GET_RESTAURANT_QUERY = `
query($id: Int!) {
    restaurant(id: $id) {
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
      }
    }
  }
`;

