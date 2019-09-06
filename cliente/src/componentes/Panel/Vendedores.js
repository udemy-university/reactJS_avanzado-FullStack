import React from 'react';
import { Query } from 'react-apollo';
import { TOP_VENDEDORES } from '../../queries';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Vendedores = () => {
    return (
        <Query query={TOP_VENDEDORES}>
            {({loading, error, data}) => {
                if(loading) return 'Cargando...';
                if(error) return `Error ${error.message}`;

                const topVendedoresGrafica = [];

                data.topVendedores.map((vendedor, index) => {
                    topVendedoresGrafica[index] = {
                        ...vendedor.vendedor[0],
                        total: vendedor.total
                    }
                });

                return(
                    <BarChart   width={600} height={300} data={topVendedoresGrafica}
                                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="nombre" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="total" fill="#8884d8" />
                    </BarChart>
                );
            }}
        </Query>
    );
}
 
export default Vendedores;