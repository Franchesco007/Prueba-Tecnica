import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const NavBar = ({ onAddProduct }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Mantenedor de Productos
        </Typography>
        <Button 
          color="inherit" 
          onClick={onAddProduct} 
          startIcon={<AddIcon />}
          sx = {{ border: '1px solid white' }}
        >
          Agregar Producto
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
