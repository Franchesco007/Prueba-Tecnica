import React from 'react';
import { AppBar, Toolbar, Button, List, ListItem, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

const ShoppingCart = ({ cart, onAdd, onRemove }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          Carrito de Compras
        </Typography>
      </Toolbar>
      <List>
        {cart.map(product => (
          <ListItem key={ product.id } sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>{ product.name }</Typography>
            <div>
              <Button
                variant="success"
                startIcon={ <AddShoppingCartIcon />}
                onClick={() => onAdd(product)}
              >
                Agregar
              </Button>
              <Button
                variant="success"
                startIcon={ <RemoveShoppingCartIcon /> }
                onClick={ () => onRemove(product) }
              >
                Quitar
              </Button>
            </div>
          </ListItem>
        ))}
      </List>
    </AppBar>
  );
};

export default ShoppingCart;
