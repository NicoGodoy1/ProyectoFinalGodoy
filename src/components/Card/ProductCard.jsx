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

      <div className=" tarjeta  ">

        <div className="card tarjetas__efecto mb-2 d-flex justify-content-center align-items-center" >
          <img 

            src="https://armoto.vtexassets.com/arquivos/ids/163866-800-auto?v=638082337057430000&width=800&height=auto&aspect=true" 
            className="card-img-top img-fluid" 
            style={{height:"220px", width:"220px"}} alt="" 

          />

          <div className="card-body p-1">
            <h5 className="card-title text-center fs-6 m-1 p-1">
              {data.name}
            </h5>
          </div>

          <ul className="list-group list-group-flush">

            <li className="list-group-item text-center email fw-bold">
              {data.email}
            </li>
            
            <div className='d-flex justify-content-center align-items-center'>

              <p class="list-group-item text-center text-decoration-line-through text-muted border-0 rounded-4 m-1 fs-6 text-danger ">
                $2000
              </p>

              <h6 className="text-center fs-4 text-success fw-bold m-1">
                $2600
              </h6>

            </div>

            <Count  />

            <button className="btn-morado mx-1 my-1 w-100 d-flex justify-content-center align-items-center" type="button" style={{maxWidth:'100 px' }} >
              AGREGAR AL CARRITO
              <i className='fs-6 ms-2 mb-2'><BsCart3/></i>
            </button>

            <Link to={`/detail/${data.id}`}>
              <button className="btn-morado align-items-center mx-1 my-1 opacity-50 w-100 d-flex justify-content-center align-items-center fs-6" style={{maxWidth:'100 px' }}>
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
