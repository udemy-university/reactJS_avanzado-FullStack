import React, { Component, Fragment } from 'react';
import Select from 'react-select';
import Resumen from './Resumen';

class ContenidoPedido extends Component {
	state = {
		productos: [],
		total: 0
	}

	actualizarCantidad = (cantidad, index) => {

		//leer el state de productos
		const productos = this.state.productos;

		let nuevoTotal = 0;

		//cuando todos los productos están en 0
		if(productos.length === 0){
			this.setState({
				total: nuevoTotal
			});
			return;
		}

		
		//actualizar la cantidad de productos
		productos[index].cantidad = Number(cantidad);
		
		//realizar la operacion de cantidad por precio
		productos.map(producto => nuevoTotal += (producto.cantidad * producto.precio));

		//validamos

		//agregamos al state
		this.setState({
			productos,
			total: nuevoTotal
		});

	}

	seleccionarProducto = (productos) => {
		this.setState({
			productos
		});
	}

	render() {
		return (
			<Fragment>
				<h2 className="text-center mb-5">Seleccionar Articulos</h2>
				<Select	onChange={this.seleccionarProducto}
						options={this.props.productos}
						isMulti={true}
						placeholder={"Seleccionar Productos"}
						getOptionValue={(options) => options.id}
						getOptionLabel={(options) => options.nombre}
				/>
				<Resumen	productos={this.state.productos}
							actualizarCantidad={this.actualizarCantidad}
				/>
				<p className="font-weight-bold float-right mt-3">
					Total:
					<span className="font-weight-normal">$ {this.state.total}</span>
				</p>
			</Fragment>
		);
	}
}
 
export default ContenidoPedido;