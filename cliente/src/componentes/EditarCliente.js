import React, { Component, Fragment } from 'react';
import { CLIENTE_QUERY } from '../queries';
import { Query } from 'react-apollo';
import FormularioEditarCliente from './FormularioEditarCliente';

class EditarCliente extends Component {
	state = {  }
	render() {
		// tomar el ID del contacto a editar
		const {id} = this.props.match.params;

		return (
			<Fragment>
				<h2 className="text-center">Editar Cliente</h2>
				<div className="row justify-content-center">
					<Query query={CLIENTE_QUERY} variables={{id}}>
						{({loading, error, data}) => {
							if(loading) return 'Cargando...';
							if(error) return `Error ${error.message}`;

							return (
								<FormularioEditarCliente
									
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