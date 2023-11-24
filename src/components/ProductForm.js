import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, InputLabel, Input, InputAdornment } from '@mui/material';

const ProductForm = ({ onSubmit, editedProduct, onCancel }) => {
  const [product, setProduct] = useState({
    id: editedProduct ? editedProduct.id : '',
    name: editedProduct ? editedProduct.name : '',
    description: editedProduct ? editedProduct.description : '',
    color: editedProduct ? editedProduct.color : '',
    size: editedProduct ? editedProduct.size : '',
    image: editedProduct ? editedProduct.image : null,
  });

  useEffect(() => {
    setProduct({
      id: editedProduct ? editedProduct.id : '',
      name: editedProduct ? editedProduct.name : '',
      description: editedProduct ? editedProduct.description : '',
      color: editedProduct ? editedProduct.color : '',
      size: editedProduct ? editedProduct.size : '',
      image: editedProduct ? editedProduct.image : null,
    });
  }, [editedProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProduct((prevProduct) => ({
          ...prevProduct,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
    onCancel(); 
  }

  const handleCancel = () => {
    onCancel(); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Detalles del Producto
        </Typography>
        <TextField
          fullWidth
          label="Nombre"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          label="Descripción"
          name="description"
          value={product.description}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          label="Color"
          name="color"
          value={product.color}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          label="Talla"
          name="size"
          value={product.size}
          onChange={handleChange}
          required
        />
        <InputLabel htmlFor="image">Imagen</InputLabel>
        <Input
          id="image"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          endAdornment={<InputAdornment position="end">{product.image && <img src={product.image} alt="Product" style={{ maxWidth: '50px', maxHeight: '50px' }} />}</InputAdornment>}
        />
        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary" sx={{ marginRight: 2 }}>
            Guardar
          </Button>
          <Button variant="contained" color="secondary" onClick={handleCancel}>
            Cancelar
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default ProductForm;
