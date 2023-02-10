import { startStandaloneServer } from "@apollo/server/standalone"
import { ApolloServer } from '@apollo/server';
import { typeDefs } from "./graphql/typedefs";
import { resolvers } from "./graphql/resolvers";
import { config } from "dotenv"
config()

const app = new ApolloServer({
    typeDefs,
    resolvers,
});

(async function startDevServer() {
    const { url } = await startStandaloneServer(app);
    console.log(`🚀  Server ready at: ${url}`);
})()


