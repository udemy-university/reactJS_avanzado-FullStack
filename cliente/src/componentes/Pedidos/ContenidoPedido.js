import React, { Component, Fragment } from 'react';
import Select from 'react-select';

class ContenidoPedido extends Component {
	state = {
		productos: []
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
			</Fragment>
		);
	}
}
 
export default ContenidoPedido;