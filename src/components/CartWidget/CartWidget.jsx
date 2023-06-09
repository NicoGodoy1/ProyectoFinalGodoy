import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import { BsCart3 } from 'react-icons/bs';


const CartWidget = () => {
  return (
    <div className="d-flex mx-1 cart-icon"> 
        <i class="mx-2 btn btn-light carrito fs-4"><BsCart3/></i>
        <p className="cart-count">0</p>
    </div>
  );
};

export default CartWidget;
