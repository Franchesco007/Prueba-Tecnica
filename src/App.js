// src/App.js
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ProductForm from './components/ProductForm';
import ShoppingCart from './components/ShoppingCart';
import NavBar from './components/NavBar';
import { Button } from '@mui/material';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Polo', description: 'Polo simple', color: 'Morado', size: 'M', image: "/images/polomorado.png"},
    { id: 2, name: 'Polo', description: 'Polo simple', color: 'Rojo', size: 'S', image:'/images/polorojo.jpeg'}
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [isDetailViewVisible, setIsDetailViewVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleProductSelect = (product) => {
    if (selectedProduct && selectedProduct.id === product.id) {
      setIsDetailViewVisible(false);
      setSelectedProduct(null);
    } else {
      setSelectedProduct(product);
      setIsDetailViewVisible(true);
    }
  };

  const handleProductDelete = (productId) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
    setIsDetailViewVisible(false); 
  };

  const handleProductSubmit = (product) => {
    const existingProduct = products.find(p => p.id === product.id);

    if (existingProduct) {
      setProducts(prevProducts => prevProducts.map(p => (p.id === product.id ? product : p)));
    } else {
      setProducts(prevProducts => [ ...prevProducts, { ...product, id: Math.max( ...prevProducts.map(p => p.id), 0) + 1 }]);
    }

    setSelectedProduct(null);
    setIsFormVisible(false); 
  };

  const handleAddToCart = (product) => {
    setCart(prevCart => [ ...prevCart, product]);
  };

  const handleRemoveFromCart = (product) => {
    setCart(prevCart => prevCart.filter(p => p.id !== product.id));
  };

  const handleProductEdit = (product) => {
    setSelectedProduct(product);
    setIsDetailViewVisible(false); 
    setIsFormVisible(true);
  };

  const handleCancelEdit = () => {
    setSelectedProduct(null);
    setIsFormVisible(false); 
  };

  const handleAddProduct = () => {
    setSelectedProduct({
      id: '',
      name: '',
      description: '',
      color: '',
      size: '',
      image: null,
    });
    setIsFormVisible(!isFormVisible); 
  };

  return (
    <div>
      <NavBar onAddProduct={handleAddProduct} />
      <ProductList 
        products={products} 
        onSelect={handleProductSelect} 
        onDelete={handleProductDelete}
        onEdit={handleProductEdit}
        onAdd={handleAddProduct}
        onAddToCart={handleAddToCart}
        >
      </ProductList>
      {isDetailViewVisible && (
        <ProductDetail product={selectedProduct} />
      )}
      {isFormVisible && (
        <ProductForm 
          onSubmit={handleProductSubmit} 
          onCancel={handleCancelEdit} 
          editedProduct={selectedProduct}>
        </ProductForm>
      )}
      <ShoppingCart 
        cart={cart} 
        onAdd={handleAddToCart} 
        onRemove={handleRemoveFromCart}>
      </ShoppingCart>
    </div>
  );
};

export default App;
