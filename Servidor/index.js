import express from 'express';
//graphql
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './data/schema';
import { resolvers } from './data/resolvers';

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import lengthDirective from './directives/lengthDirective';

dotenv.config({path: 'variables.env'});

const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async({req}) => {
        //obtener el token en el servidor
		const token = req.headers['authorization'];

		/**
		 *	https://www.apollographql.com/docs/apollo-server/security/authentication/
			Seguridad opción 1) puedo buscar un usuario por el token 
			y si no hay usuario tirar una excepción de que hay que loguearse.
			(mi duda es como restringir para qe lo pida en todos los casos menos en un login)
		 */

        /*	Prestar atencion que en el video se usa "null" pero ahora si no hay token llega como undefined */
        if(token !== undefined) {
            try {
                const usuarioActual = await jwt.verify(token, process.env.SECRETO);
                req.usuarioActual = usuarioActual;

				/**
				 *	Delegating authorization to models
					en el return agrupando por el objeto models: {} puedo devolver los modelos que quiero utilizar
					permitiendome así, junto con el usuario de la sesión saber si puede o no acceder a esa información
				 */
                return {
                    usuarioActual
                }
            } catch(err){
                console.log(err);
            }
        }
	},
	schemaDirectives: {
		lenght: lengthDirective
	}
});

server.applyMiddleware({app}); //Se conecta Apollo server con express

app.listen({port: 4000}, () => console.log(`El servidor esta corriendo http://localhost:4000${server.graphqlPath}`));