import React, { useState } from 'react';

function ProductTransactionForm({ products, sellProduct }) {
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [quantity, setQuantity] = useState('');

  const handleSell = (e) => {
    e.preventDefault();
    if (!quantity || quantity <= 0) return;
    sellProduct(selectedProductIndex, parseInt(quantity));
    setQuantity('');
  };

  return (
    <form onSubmit={handleSell}>
      <select onChange={(e) => setSelectedProductIndex(e.target.value)}>
        {products.map((product, index) => (
          <option key={index} value={index}>
            {product.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Quantidade"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button type="submit">Registrar Venda</button>
    </form>
  );
}

export default ProductTransactionForm;
