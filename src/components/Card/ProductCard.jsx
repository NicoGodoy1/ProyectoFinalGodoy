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
          <img src="https://armoto.vtexassets.com/arquivos/ids/163866-800-auto?v=638082337057430000&width=800&height=auto&aspect=true" className="card-img-top img-fluid" style={{height:"200px", width:"200px"}} alt="" />
          <div className="card-body f-6 m-1 p-1">
            <h5 className="card-title text-center f-6 m-1 p-1" >{data.name}</h5>
          </div>
          <ul className="list-group list-group-flush">
          <li className="list-group-item text-center email fw-bold">{data.email}</li>
          <p class="list-group-item text-center text-decoration-line-through text-muted border-0 rounded-4 m-0 p-0 fs-6 text-danger">$2000</p>
          <h6 className="text-center f-2 text-success fw-bold">
            $ 2600
          </h6>
          <Count  />
          <button className="btn-morado  mx-2 my-2 w-100 d-flex justify-content-center align-items-center" type="button" style={{maxWidth:'100 px' }} >
            Agregar <i className='fs-6 ms-2 mb-2'> <BsCart3 /> </i>
          </button>
          <Link to={`/detail/${data.id}`}>
             <button className="btn-morado align-items-center mx-2 my-2" style={{maxWidth:'100 px' }}>
              Ver detalle del producto
             </button> 
          </Link>
          </ul>
        </div>
      </div>
    </div>
    
  )
}

export default ProductCard;
