import { startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda';
import { ApolloServer } from '@apollo/server';
import { resolvers } from './graphql/resolvers';
import { typeDefs } from './graphql/typedefs';


const app = new ApolloServer({
  typeDefs,
  resolvers,
});

export const handler = startServerAndCreateLambdaHandler(app);

