import React, { Component, Fragment } from 'react';
import Select from 'react-select';
import Resumen from './Resumen';
import GenerarPedido from './GenerarPedido';
import Error from '../Alertas/Error';

class ContenidoPedido extends Component {
	state = {
		productos: [],
		total: 0
	}

	actualizarCantidad = (cantidad, index) => {
		//leer el state de productos
		const productos = this.state.productos;
		//validamos

		//actualizar la cantidad de productos
		productos[index].cantidad = Number(cantidad);

		//agregamos al state
		this.setState({
			productos
		},()=>{
			this.actualizarTotal()
		});

	}

	actualizarTotal = () => {
		//leer el state de productos
		const productos = this.state.productos;
				
		//cuando todos los productos están en 0
		if(productos.length === 0){
			this.setState({
				total: 0
			});
			return;
		}

		let nuevoTotal = 0;

		//realizar la operacion de cantidad por precio
		productos.map(producto => nuevoTotal += (Number(producto.cantidad) * producto.precio));  

		this.setState({
			total: nuevoTotal
		})
	}

	seleccionarProducto = (productos) => {
		this.setState({
			productos
		});
	}

	eliminarProducto = (id) => {
		const productos = this.state.productos;

		const productosRestantes = productos.filter(producto => producto.id !== id);

		this.setState({
			productos: productosRestantes
		},()=>{
			this.actualizarTotal()
		});
	}

	render() {
		const mensaje = this.state.total <0 ? <Error error="Las cantidades no pueden ser negativas" /> : "";

		return (
			<Fragment>
				<h2 className="text-center mb-5">Seleccionar Articulos</h2>
				{mensaje}
				<Select	onChange={this.seleccionarProducto}
						options={this.props.productos}
						isMulti={true}
						placeholder={"Seleccionar Productos"}
						getOptionValue={(options) => options.id}
						getOptionLabel={(options) => options.nombre}
						value={this.state.productos}
				/>
				<Resumen	productos={this.state.productos}
							actualizarCantidad={this.actualizarCantidad}
							eliminarProducto={this.eliminarProducto}
				/>
				<p className="font-weight-bold float-right mt-3">
					Total:
					<span className="font-weight-normal">$ {this.state.total}</span>
				</p>

				<GenerarPedido	productos={this.state.productos}
								total={this.state.total}
								idCliente={this.props.id}
								idVendedor={this.props.idVendedor}
				/>
			</Fragment>
		);
	}
}
 
export default ContenidoPedido;