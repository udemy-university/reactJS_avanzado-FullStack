class Cliente {
    constructor(id, {nombre, apellido, empresa, emails, edad, tipo, pedidos}){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.empresa = empresa;
		this.emails = emails;
		this.edad = edad;
		this.tipo = tipo;
		this.pedidos = pedidos;
    }
}

const clientesDb = {};

//El resolver, rta del servidor
const resolvers = {
	getCliente: ({id}) => {
		return new Cliente(id, clientesDb[id]);
	},
    crearCliente: ({input}) => {
        const id = require('crypto').randomBytes(10).toString('hex');
        clientesDb[id] = input;
        return new Cliente(id, input);
    }
};

export default resolvers;