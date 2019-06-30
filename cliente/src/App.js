import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient  from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importar componentes
import Header from './componentes/Header';
import Clientes from './componentes/Clientes';
import EditarCliente from './componentes/EditarCliente';
import NuevoCliente from './componentes/NuevoCliente';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
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
                <Route exact path="/" component={Clientes} />
                <Route exact path="/cliente/editar/:id" component={EditarCliente} />
                <Route exact path="/cliente/nuevo" component={NuevoCliente} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
