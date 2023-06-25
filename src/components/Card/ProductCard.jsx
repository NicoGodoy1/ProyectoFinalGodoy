import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./ProductCard.css";
import { BsCart3 } from 'react-icons/bs';
import Count from '../Counter/ItemCount';
import { Link } from "react-router-dom";



const ProductCard = ({ data }) => {

  return (

    <div className="d-flex gap-3 justify-content-center align-items-center">

      <div className=" tarjeta ">

        <div className="card tarjetas__efecto m-1 d-flex justify-content-center align-items-center p-0 pb-4" >
          <img 

            src="https://armoto.vtexassets.com/arquivos/ids/163866-800-auto?v=638082337057430000&width=800&height=auto&aspect=true" 
            className="card-img-top img-fluid" 
            style={{height:"320px", width:"360px"}} alt="" 

          />

          <ul className="list-group list-group-flush">

            <li className="list-group-item text-center email p-0">
              <h5 className='card-title text-center fs-6 m-1 fw-bold'>
              {data.name}
              </h5>
              {data.email}
            </li>
            
            <div className='d-flex justify-content-center align-items-center'>

              <p class="list-group-item text-center text-decoration-line-through text-muted border-0 rounded-4 m-1 text-danger precioAnterior p-1 ">
                $2000
              </p>

              <h6 className="text-center fs-6 text-success fw-bold m-1">
                $2600
              </h6>

            </div>

            <Count />

            <button className="btn-morado mx-1 my-1 w-100 d-flex justify-content-center align-items-center" type="button" style={{maxWidth:'100 px' }} >
              AGREGAR AL CARRITO
              <i className='carrito ms-2 mb-2 pt-1'><BsCart3/></i>
            </button>

            <Link to={`/detail/${data.id}`}>
              <button className="btn-morado align-items-center mx-1 my-1 opacity-50 w-100 d-flex justify-content-center align-items-center detalle" style={{maxWidth:'100 px' }}>
                ver detalle
              </button> 
            </Link>

          </ul>

        </div>

      </div>

    </div>
  )
}

export default ProductCard;
