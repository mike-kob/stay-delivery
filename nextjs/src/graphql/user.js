
export const GET_USER_QUERY = `
query {
  me {
    client {
      id
      phone
      cardNumber
      address
      name
      user {
        email
      }
    }
  }
}
`;

export const UPDATE_USER_MUTATION = `
mutation (
  $phone: String
  $card: String
  $address: String
) {
  updateClient (data: {
    phone: $phone
    card: $card
    address: $address
  }) {
    client {
      id
      phone
      cardNumber
      address
      name
      user {
        email
      }
    }
  }
}
`;
