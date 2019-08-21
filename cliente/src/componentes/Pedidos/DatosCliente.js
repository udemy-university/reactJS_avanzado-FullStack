import React, { Fragment } from 'react'
import { Query } from 'react-apollo';
import { CLIENTE_QUERY } from '../../queries';

const DatosCliente = ({id}) => {
    return (
        <Fragment>
            <h2 className="text-center mb-3">Resumen de Cliente</h2>
            <Query query={CLIENTE_QUERY} variables={{id}} pollInterval={500}>
                {({ loading, error, data, startPolling, stopPolling}) => {
                    if(loading) return "Cargando...";
                    if(error) return `Error ${error.message}`;
                    console.log(data);

                    return (
                        <p>A</p>
                    )
                }}
            </Query>
        </Fragment>
    );
}
 
export default DatosCliente;