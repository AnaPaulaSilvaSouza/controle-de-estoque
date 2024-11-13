import React from 'react';

function ProductList({ products, removeProduct }) {
  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - Quantidade: {product.quantity} - Preço de Compra: R$ {product.purchasePrice.toFixed(2)} - Preço de Venda: R$ {product.salePrice.toFixed(2)}
            <button onClick={() => removeProduct(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;

