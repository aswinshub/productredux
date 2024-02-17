import React from 'react';
import './Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  return (

    <header>
    <div className='container'>
    
     <h1>Web Qoder </h1>

     <ShoppingCartIcon/>
    
    </div>
    </header>
  )
}

export default Header
