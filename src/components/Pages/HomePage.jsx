import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import GreetingContainer from '../GreetingContainer/Greeting';
import CarouselOffers from '../Carousel/Carousel';


const HomePage = () => {
  return (
    <div>
      <GreetingContainer greeting="¡Aprovechá las ofertas destacadas!" />
      <h3 className='bg-dark bg-gradient w-50 text-white mt-2 bg-opacity-75 rounded-end'>
        ¡Conocé toda nuestra gama de celulares Motorola!
      </h3>
      <div className="d-flex gap-3 justify-content-center align-items-center">
          <ItemListContainer />
      </div>
      <CarouselOffers/>
    </div>

  )
}

export default HomePage;
