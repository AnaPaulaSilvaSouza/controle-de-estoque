import React, { useState } from 'react';

function AddProductForm({ addProduct }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [salePrice, setSalePrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !quantity || !purchasePrice || !salePrice) return;
    addProduct({
      name,
      quantity: parseInt(quantity),
      purchasePrice: parseFloat(purchasePrice),
      salePrice: parseFloat(salePrice),
    });
    setName('');
    setQuantity('');
    setPurchasePrice('');
    setSalePrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do produto"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantidade"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input
        type="number"
        placeholder="Preço de compra"
        value={purchasePrice}
        onChange={(e) => setPurchasePrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Preço de venda"
        value={salePrice}
        onChange={(e) => setSalePrice(e.target.value)}
      />
      <button type="submit">Adicionar Produto</button>
    </form>
  );
}

export default AddProductForm;

