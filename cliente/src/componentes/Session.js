import React from 'react';
import { Query } from 'react-apollo';
import { USUARIO_ACTUAL } from '../queries';

/** Asi se crea un HOC */
/** Va a revisar todos los componentes que se listan en App.js */
const Session = Component => props => (
    <Query query={USUARIO_ACTUAL}>
        {({loading, error, data, refetch}) => {
            if(loading) return null;
            return <Component {...props} refetch={refetch} session={data} />
        }}
    </Query>
)
 
export default Session;