import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BsCart3 } from 'react-icons/bs';


const CartIcon = ({valor}) => {
  return (
    <div className="d-flex mx-1 cart-icon"> 
        <i className="mx-2 btn btn-light carrito fs-4"><BsCart3/></i>
        <p className="cart-count">{valor}</p>
    </div>
  );
};

export default CartIcon;
