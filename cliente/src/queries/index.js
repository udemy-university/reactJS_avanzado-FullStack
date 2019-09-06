import gql from 'graphql-tag';
export const CLIENTES_QUERY =  gql`
    query getClientes($limite: Int, $offset: Int, $vendedor: String){
		getClientes(limite: $limite , offset: $offset, vendedor: $vendedor) {
			id
			nombre
			apellido
			empresa
		}
		totalClientes(vendedor: $vendedor)
	}`;

export const CLIENTE_QUERY = gql`
	query ConsultarCliente($id:ID){
		getCliente(id: $id){
			id
			nombre
			apellido
			empresa
			edad
			tipo
			emails {
				email
			}
		}
	}`;

export const PRODUCTOS_QUERY = gql`
	query {
  		obtenerProductos{
			id
			nombre
			precio
			stock
		}
	}
`;

export const OBTENER_PRODUCTO = gql`
	query obtenerProducto($id: ID!) {
		obtenerProducto(id: $id) {
			nombre
			precio
			stock
		}
	}
`;

export const OBTENER_PRODUCTOS = gql `
	query obtenerProductos($limite:Int, $offset: Int, $stock: Boolean) {
		obtenerProductos(limite: $limite, offset: $offset, stock: $stock){
			id
			nombre
			precio
			stock
		}
		totalProductos
	}
`;

export const OBTENER_PEDIDOS = gql `
	query obtenerPedidos($cliente: String) {
		obtenerPedidos(cliente: $cliente) {
			id
			total
			fecha
			estado
			pedido {
				id
				cantidad
			}
		}
	}
`;

//Gráfico

export const TOP_CLIENTES = gql`
	query topClientes {
		topClientes{
			total
			cliente{
				nombre
			}
		}
	}
`;

export const TOP_VENDEDORES = gql`
	query topVendedores {
		topVendedores{
			total
			vendedor{
				nombre
			}
		}
	}
`;

//Usuarios

export const USUARIO_ACTUAL = gql`
	query obtenerUsuario {
		obtenerUsuario {
			id
			usuario
			nombre
			rol
		}
	}
`;