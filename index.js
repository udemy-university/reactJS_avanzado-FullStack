import express from 'express';
//graphql
import graphqlHTTP from 'express-graphql';
import schema from './data/schema';

import resolvers from './data/resolvers';

const root = resolvers;
const app = express();

app.get('/', (req, res) => {
    res.send('Todo Listo');
});

app.use('/graphql', graphqlHTTP({
    //que schema va a utilizar cuando estemos en esa URL
    schema,
    // el resolver se pasa como rootValue
    rootValue: root,
    //utilizar graphiql
    graphiql: true
}));

app.listen(8001, ()=>{
    console.log("El servidor esta funcionando");
});