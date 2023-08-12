const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    password: String
    savedBooks: {
      bookId: String
      authors: [String]
      description: String
      title: String
      image: String
      link: String
    }
  }

  

  type Query {
    getSingleuser: [User]
    
  }

  type Mutation {
    login(email: String!, password: String!): User
    createUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): User
    saveBook(title: String!, content: String!, programmingLanguage: String! username: String!): Codes
    deleteBook(_id: ID!): User
    
  }
`;

module.exports = typeDefs;
