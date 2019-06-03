import express from 'express';
//graphql
import graphqlHTTP from 'express-graphql';
import { schema } from './data/schema';

const app = express();

app.get('/', (req, res) => {
    res.send('Todo Listo');
});

app.use('/graphql', graphqlHTTP({
    //que schema va a utilizar cuando estemos en esa URL
    schema,
    //utilizar graphiql
    graphiql: true
}));

app.listen(8001, ()=>{
    console.log("El servidor esta funcionando");
});