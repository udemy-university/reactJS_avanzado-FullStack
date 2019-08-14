import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/clientes', {useNewUrlParser: true});

mongoose.set('setFindAndUpdate', false);

//Definir el schema de clientes

const clientesSchema = new mongoose.Schema({
	nombre: String,
	apellido: String,
	empresa: String,
	emails: Array,
	edad: Number,
	tipo: String,
	pedidos: Array
});

const Clientes = mongoose.model('clientes', clientesSchema);

const productosSchema = new mongoose.Schema({
	nombre: String,
	precio: Number,
	stock: Number
});

const Productos = mongoose.model('productos', productosSchema);

export { Clientes, Productos };