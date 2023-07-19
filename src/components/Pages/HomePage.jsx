import React from 'react'
import ProductList from '../Product Detail/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import ItemListContainer from '../GreetingContainer/Greeting';


const HomePage = () => {
  return (
    <div>
      <ItemListContainer greeting="¡Aprovechá las ofertas destacadas!" />
      <h3 className='bg-dark bg-gradient w-50 text-white mt-5 bg-opacity-75 rounded-end '>
        ¡Conocé toda nuestra gama de celulares Motorola!
      </h3>
      <div className="d-flex gap-3 justify-content-center align-items-center">
          <ProductList />
      </div>
    </div>

  )
}

export default HomePage;
