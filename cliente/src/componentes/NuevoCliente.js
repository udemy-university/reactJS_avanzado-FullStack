import React, { Component, Fragment } from 'react';

import {NUEVO_CLIENTE} from '../mutations';
import { Mutation } from 'react-apollo';

class NuevoCliente extends Component {
    state = { 
		cliente: {
			nombre: '',
			apellido: '',
			empresa: '',
			edad: '',
			email: '',
			tipo: ''
		}
	 }
    render() { 
        return (
            <Fragment>
                <h2 className="text-center">Nuevo Cliente</h2>
                <div className="row justify-content-center">
					<Mutation mutation={NUEVO_CLIENTE}>
						{crearCliente => (
							<form className="col-md-8 m-3"
									onSubmit={e=>{
										e.preventDefault();

										const {nombre, apellido, empresa, edad, tipo, email} = this.state.cliente;
										const input = {nombre, apellido, empresa, edad: Number(edad), tipo, email};

										crearCliente({
											variables: {input}
										})
									}}>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label>Nombre</label>
										<input	onChange={e=>{
													this.setState({
														cliente: {
															...this.state.cliente,
															nombre: e.target.value
														}
													})
												}}
												type="text"
												className="form-control"
												placeholder="Nombre"
										/>
									</div>
									<div className="form-group col-md-6">
										<label>Apellido</label>
										<input	onChange={e=>{
													this.setState({
														cliente: {
															...this.state.cliente,
															apellido: e.target.value
														}
													})
												}}
												type="text"
												className="form-control"
												placeholder="Apellido"
										/>
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label>Empresa</label>
										<input	onChange={e=>{
													this.setState({
														cliente: {
															...this.state.cliente,
															empresa: e.target.value
														}
													})
												}}
												type="text"
												className="form-control"
												placeholder="Empresa"
										/>
									</div>
									<div className="form-group col-md-6">
										<label>Email</label>
										<input	onChange={e=>{
													this.setState({
														cliente: {
															...this.state.cliente,
															email: e.target.value
														}
													})
												}}
												type="email"
												className="form-control"
												placeholder="Email"
										/>
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label>Edad</label>
										<input	onChange={e=>{
													this.setState({
														cliente: {
															...this.state.cliente,
															edad: e.target.value
														}
													})
												}}
												type="text"
												className="form-control"
												placeholder="Edad"
										/>
									</div>
									<div className="form-group col-md-6">
										<label>Tipo Cliente</label>  
										<select	onChange={e=>{
													this.setState({
														cliente: {
															...this.state.cliente,
															tipo: e.target.value
														}
													})
												}}
												className="form-control">
											<option value="">Elegir...</option>
											<option value="PREMIUN">PREMIUN</option>
											<option value="BASICO">BÁSICO</option>
										</select>
									</div>
								</div>
								<button type="submit" className="btn btn-success float-right">Guardar Cambios</button>
							</form>
						)}
					</Mutation>
                </div>
            </Fragment>
        );
    }
}
 
export default NuevoCliente;