import React from 'react'
import { Mutation } from 'react-apollo';
import { NUEVO_PEDIDO } from '../../mutations';
import { withRouter } from 'react-router-dom';

const validarPedido = (props) => {
	let noValido = !props.productos || props.total <= 0;
	return noValido;
}

const GenerarPedido = (props) => {

	return (
		<Mutation	mutation={NUEVO_PEDIDO}
					onCompleted={ ()=>props.history.push('/clientes')}
		>
			{nuevoPedido => (
				<button	disabled={validarPedido(props)}
						type="button"
						className="btn btn-warning mt-4"
						onClick={e => {
							//destructuring y quitamos campos del objeto que no necesitamos para el input definido en schemas.graphql.
							const productosInput = props.productos.map(({nombre, precio, stock, ...objeto}) => objeto);
							const input = {
								pedido: productosInput,
								total: props.total,
								cliente: props.idCliente,
								vendedor: props.idVendedor
							}

							nuevoPedido({
								variables: {input}
							})
						}}
				>
							Generar Pedido
						</button>
			)}
		</Mutation>
	);
}
 
export default withRouter(GenerarPedido);