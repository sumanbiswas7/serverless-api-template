const typeDefs = `#graphql

    type Movie {
        title:  String!
        year:   Int!
        genres: [String]!
        rating: Float!
    }

    type Animal {
        name:    String!
        class:   String!
        diet:    String!
        habitat: String!
    }

    type Query {
        getMovies: [Movie]
        getAnimals: [Animal]
        getSecret: String
    }
`;


export { typeDefs }

