import React from 'react'
import products from '../../data/products'
import './TableProducts.css'
export default props => {

    const trItems = products.map(product => {
        return (
            <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.nomeProduto}</td>
                <td>{product.preco}</td>
            </tr>
        );
    })

    return (
        <table class="demTable">
            
            <thead>
                <tr>
                    <th>id</th>
                    <th>nomeProduto</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {trItems}
            </tbody>
        </table>
    )

}