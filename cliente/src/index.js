import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RootSession } from './App';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { InMemoryCache }  from 'apollo-boost';
import * as serviceWorker from './serviceWorker';

/**
 * InMemoryCache: cuando haces un update de una persona, se agregan campos que no pertenecen al input predefinido
 * 					seteando la propiedad en false, esto dejará de pasar.
 */
const client = new ApolloClient({
	uri: "http://localhost:4000/graphql",
	//Enviar token al servidor
	fetchOptions: {
		credentials: 'include'
	},
	//aqui por medio de apollo se envia el token y se revisa esto al acceder a cada página.
	request: operation => {
		const token = localStorage.getItem('token');
		operation.setContext({
			headers: {
				authorization: token
			}
		})
	},
	cache: new InMemoryCache({
		addTypename: false
	}),
	onError: ({networkError, graphQLErros}) => {
		console.log('graphQLErrors', graphQLErros);
		console.log('networkErrors', networkError);
	}
});

ReactDOM.render(
        <ApolloProvider client={client}>
            <RootSession />
        </ApolloProvider>,
        document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
