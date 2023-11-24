// src/components/ProductDetail.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const ProductDetail = ({ product }) => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Detalle del Producto
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Typography variant="h6" gutterBottom>
          {product.name}
        </Typography>
        <img
          src={product.image}
          alt={product.name}
          style={{ maxWidth: '200px', maxHeight: '200px' }}
        />
        <Box display="flex" justifyContent="space-between" width="200px" mt={2}>
          <Typography variant="body2" color="textSecondary">
            Color: {product.color}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Talla: {product.size}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default ProductDetail;
