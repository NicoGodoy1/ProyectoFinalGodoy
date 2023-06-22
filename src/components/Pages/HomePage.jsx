import React from 'react'
import ProductList from '../Product Detail/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const HomePage = () => {
  return (
    <div>
      <h3>Estás en Inicio</h3>
      <div className="d-flex gap-3 justify-content-center align-items-center">
          <ProductList />
      </div>
    </div>

  )
}

export default HomePage;
