import express from 'express';
//graphql
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './data/schema';
import { resolvers } from './data/resolvers';

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config({path: 'variables.env'});

const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async({req}) => {
        //obtener el token en el servidor
        const token = req.headers['authorization'];

        /**Prestar atencion que en el video se usa "null" pero ahora si no hay token llega como undefined */
        if(token !== undefined) {
            try {
                const usuarioActual = await jwt.verify(token, process.env.SECRETO);
                req.usuarioActual = usuarioActual;

                return {
                    usuarioActual
                }
            } catch(err){
                console.log(err);
            }
        }
    }
});

server.applyMiddleware({app}); //Se conecta Apollo server con express

app.listen({port: 4000}, () => console.log(`El servidor esta corriendo http://localhost:4000${server.graphqlPath}`));