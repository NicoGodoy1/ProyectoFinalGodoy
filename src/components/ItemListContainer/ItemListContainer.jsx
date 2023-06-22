import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BsPhoneFlip } from 'react-icons/bs';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="w-75 ">
      <h2 class="fondo-rojo bg-danger bg-gradient w-50 mt-0 px-2 py-2 pt-2 ">{greeting}<i class="fs-4 ms-2 mb-2"><BsPhoneFlip/></i></h2>
      {/* <ProductList/> */}
    </div>
  );
};

export default ItemListContainer;