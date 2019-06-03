import express from 'express';
//graphql
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('Todo Listo');
});

const clientesDb = {};

//El resolver, rta del servidor
const root = {
    cliente: () => {
        return {
            "id": 1251225,
            "nombre": "Sandro",
            "apellido": "Dezerio",
            "empresa": "Smart360",
            "emails": "sdezerio@gmail.com"
        }
    },
    crearCliente: ({input}) => {
        const id = require('crypto').randomBytes(10).toString('hex');
        clientesDb[id] = input;
        return new Cliente(id, input);
    }
};

class Cliente {
    constructor(id, {nombre, apellido, empresa, email}){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.empresa = empresa;
        this.email = email;
    }
}

app.use('/graphql', graphqlHTTP({
    //que schema va a utilizar cuando estemos en esa URL
    schema,
    // el resolver se pasa como rootValue
    rootValue: root,
    //utilizar graphiql
    graphiql: true
}));

app.listen(8000, ()=>{
    console.log("El servidor esta funcionando");
});