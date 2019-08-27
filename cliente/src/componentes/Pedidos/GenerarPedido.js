import React from 'react'

const validarPedido = (props) => {
	let noValido = !props.productos || props.total === 0;
	return noValido;
}

const GenerarPedido = (props) => {
	return (
		<button	disabled={validarPedido(props)}
				type="button"
				className="btn btn-warning mt-4">
					Generar Pedido
				</button>
	);
}
 
export default GenerarPedido;