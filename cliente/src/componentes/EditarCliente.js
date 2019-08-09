import React, { Component, Fragment } from 'react';
import { CLIENTE_QUERY } from '../queries';
import { Query } from 'react-apollo';
import FormularioEditarCliente from './FormularioEditarCliente';

class EditarCliente extends Component {
	state = { 
		
	}
	render() {
		// tomar el ID del contacto a editar
		const {id} = this.props.match.params;

		return (
			<Fragment>
				<h2 className="text-center">Editar Cliente</h2>
				<div className="row justify-content-center">
					{/**
						Refetch sirve para refrescar la caché. Se usa cuando edito una persona en el formulario,
						se actualiza en la grilla pero cuando vuelvo a ingresar
						al formulario seguía mostrando los datos viejos.
					*/}
					<Query query={CLIENTE_QUERY} variables={{id}}>
						{({loading, error, data, refetch}) => {
							if(loading) return 'Cargando...';
							if(error) return `Error ${error.message}`;

							return (
								<FormularioEditarCliente
									cliente={data.getCliente}
									refetch={refetch}
									id
								/>
							)
						}}
					</Query>
				</div>
			</Fragment>
		);
	}
}

export default EditarCliente;