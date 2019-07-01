import express from 'express';
//graphql
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './data/schema';
import { resolvers } from './data/resolvers';

const app = express();
const server = new ApolloServer({typeDefs, resolvers});

server.applyMiddleware({app}); //Se conecta Apollo server con express

app.listen({port: 4000}, () => console.log(`El servidor esta corriendo http://localhost:4000${server.graphqlPath}`));