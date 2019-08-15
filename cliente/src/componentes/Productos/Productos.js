import React, { Component, Fragment } from 'react';
import { Query, Mutation } from 'react-apollo';
import { PRODUCTOS_QUERY } from '../../queries';
import { ELIMINAR_PRODUCTO } from '../../mutations';
import { Link } from 'react-router-dom';

import Exito from '../Alertas/Exito';

class Productos extends Component {
    state = {
        alerta: {
            mostrar: false,
            mensaje: ''
        }
    }
    render() {
        const {alerta: {mostrar, mensaje}} = this.state; //otra forma de hacer destructuring
        const alerta = (mostrar) ? <Exito mensaje={mensaje} /> : '';

        return (
            <Fragment>
                <h1 className="text-center mb-5">Productos</h1>
                {alerta}
                <Query query={PRODUCTOS_QUERY} pollInterval={1000}>
                {({ loading, error, data, startPolling, stopPolling }) => {
                    if(loading) return "Cargando...";
                    if(error) return `Error: ${error.message}`;
                    console.log(data);
                    return (
                        <table className="table">
                            <thead>
                                <tr className="table-primary">
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Eliminar</th>
                                    <th scope="col">Editar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.obtenerProductos.map(item => {
                                    const {id} = item;
                                    return(
                                        <tr key={id}>
                                            <td>{item.nombre}</td>
                                            <td>{item.precio}</td>
                                            <td>{item.stock}</td>
                                            <td>
                                                <Mutation   mutation={ELIMINAR_PRODUCTO}
                                                            onCompleted={(data) => {
                                                                this.setState({
                                                                    alerta: {
                                                                        mostrar: true,
                                                                        mensaje: data.eliminarProducto
                                                                    }
                                                                }, () => {
                                                                    setTimeout(()=>{
                                                                        this.setState({
                                                                            alerta: {
                                                                                mostrar: false,
                                                                                mensaje: ''
                                                                            }
                                                                        })
                                                                    }, 3000);
                                                                })
                                                            }}
                                                >
                                                    {eliminarProducto => (
                                                        <button type="button"
                                                                className="btn btn-danger"
                                                                onClick={()=>{
                                                                    if(window.confirm('Seguro que deseas eliminar este producto?')){
                                                                        eliminarProducto({
                                                                            variables: {id}
                                                                        });
                                                                    }
                                                                }}
                                                        >
                                                            &times; Eliminar
                                                        </button>
                                                    )}
                                                </Mutation>
                                            </td>
                                            <td>
                                                <Link   to={`/productos/editar/${id}`}
                                                        className="btn btn-success">
                                                    Editar Producto
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    );
                }}
                
                </Query>
            </Fragment>
        );
    }
}
 
export default Productos;