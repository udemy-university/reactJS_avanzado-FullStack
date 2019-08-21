import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { InMemoryCache }  from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importar componentes
import Header from './componentes/Layout/Header';

import Clientes from './componentes/Clientes/Clientes';
import NuevoCliente from './componentes/Clientes/NuevoCliente';
import EditarCliente from './componentes/Clientes/EditarCliente';

import Productos from './componentes/Productos/Productos';
import NuevoProducto from './componentes/Productos/NuevoProducto';
import EditarProducto from './componentes/Productos/EditarProducto';

/**
 * InMemoryCache: cuando haces un update de una persona, se agregan campos que no pertenecen al input predefinido
 * 					seteando la propiedad en false, esto dejará de pasar.
 */
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache({
	addTypename: false
  }),
  onError: ({networkError, graphQLErros}) => {
    console.log('graphQLErrors', graphQLErros);
    console.log('networkErrors', networkError);
  }
});

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Router>
          <React.Fragment>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/clientes" component={Clientes} />
                <Route exact path="/clientes/editar/:id" component={EditarCliente} />
                <Route exact path="/clientes/nuevo" component={NuevoCliente} />
                <Route exact path="/productos" component={Productos} />
                <Route exact path="/productos/editar/:id" component={EditarProducto} />
                <Route exact path="/productos/nuevo" component={NuevoProducto} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
