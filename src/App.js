import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';
import ProductTransactionForm from './ProductTransactionForm';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [totalSales, setTotalSales] = useState(0);

  // Carregar produtos e total de vendas do localStorage
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const storedTotalSales = JSON.parse(localStorage.getItem('totalSales')) || 0;
    setProducts(storedProducts);
    setTotalSales(storedTotalSales);
  }, []);

  // Salvar produtos no localStorage sempre que houver alteração
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  // Salvar total de vendas no localStorage sempre que houver alteração
  useEffect(() => {
    localStorage.setItem('totalSales', JSON.stringify(totalSales));
  }, [totalSales]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const removeProduct = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };

  const sellProduct = (index, quantity) => {
    const newProducts = [...products];
    const product = newProducts[index];

    if (product.quantity >= quantity) {
      product.quantity -= quantity;
      const saleValue = quantity * product.salePrice;
      setTotalSales(totalSales + saleValue);
      setProducts(newProducts);
    } else {
      alert("Quantidade insuficiente em estoque!");
    }
  };

  const calculateTotalValue = () => {
    return products.reduce((total, product) => total + product.quantity * product.salePrice, 0);
  };

  return (
    <div className="container">
      <h1>Controle de Estoque - Becca Modas</h1>
      <AddProductForm addProduct={addProduct} />
      <ProductTransactionForm products={products} sellProduct={sellProduct} />
      <ProductList products={products} removeProduct={removeProduct} />
      <div className="total-values">
        <h2>Total em Estoque: R$ {calculateTotalValue().toFixed(2)}</h2>
        <h2>Total de Vendas: R$ {totalSales.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default App;
