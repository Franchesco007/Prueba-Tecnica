// src/components/ProductList.js
import React from 'react';
import ProductDetail from './ProductDetail';
import ProductForm from './ProductForm';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductList = ({ products, onSelect, onDelete, onEdit, onAdd, onAddToCart }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Descripción</TableCell>
            <TableCell>Color</TableCell>
            <TableCell>Talla</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.color}</TableCell>
              <TableCell>{product.size}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  startIcon={<VisibilityIcon />}
                  color="primary"
                  onClick={() => onSelect(product)}
                  style={{ marginRight: '8px' }}
                >
                  Detalles
                </Button>
                <Button
                  variant="contained"
                  startIcon={<EditIcon />}
                  color="success"
                  onClick={() => onEdit(product)}
                  style={{ marginRight: '8px' }}
                >
                  Editar
                </Button>
                <Button
                  variant="contained"
                  startIcon={<DeleteIcon />}
                  color="error"
                  onClick={() => onDelete(product.id)}
                  style={{ marginRight: '8px' }}
                >
                  Eliminar
                </Button>
                <Button
                  variant="contained"
                  color="info"
                  onClick={() => onAddToCart(product)}
                  startIcon={<AddShoppingCartIcon />}
                >
                  Agregar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ProductList;
