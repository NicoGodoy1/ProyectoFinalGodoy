import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./DetailCard.css"
import { BsCart3, BsTruck, BsShop} from 'react-icons/bs';

const DetailCard = ({ data }) => {
  return (
    <div className="fondo d-flex gap-3 justify-content-center align-items-center w-100">
      <div className=" detailcard tarjeta FlexContainer fondoGradiente ">
        <div >

          <img 
            src="https://armoto.vtexassets.com/arquivos/ids/163866-800-auto?v=638082337057430000&width=800&height=auto&aspect=true" 
            className="card-img-top img-fluid" 
            style={{height:"500px", width:"500px"}} alt="" 
          /> 

          <h4 className='fw-semibold mt-2'>
            Moto G 72
          </h4>

        </div>


        <div className="card mb-2 justify-content-center align-items-center d-flex justify-content-center" >

          <div className="card-body f-6 m-1 p-1 d-flex align-items-center justify-content-center">

            <ul className="list-group list-group-flush">

              <h5 className="card-title text-center fs-2 fw-bold" >
                {data.name}
              </h5>

              <li className="list-group-item text-center fs-4 fw-bold my-4">
                {data.email}
              </li>

              <p class="list-group-item text-center text-decoration-line-through text-muted border-0 rounded-4 m-0 p-0 fs-6 text-danger">
                $2000
              </p>

              <h6 className="text-center fs-2 text-success fw-bold">
                $2600
              </h6>

              <button className="btn-morado align-items-center mx-2 my-2 fs-6 d-flex align-items-center justify-content-center" type="button" >
                COMPRAR
                <i className='fs-6 ms-2 m-2 pb-1'>
                  <BsCart3 />
                </i>
              </button>

              <p className='mt-3 d-flex flex-column align-items-start justify-content-center'>
                <p className='fs-6 '  style={{textDecoration:"None"}} ><i className='fs-2 mx-2'><BsTruck /></i>Envío a Córdoba (5000): $1299 Entrega estimada 3 días habiles</p>
                <p className=''><i className='fs-2 mx-2'><BsShop /></i>Retiro GRATIS en sucursal<i className='text-success'> ¡Retiralo YA!</i></p>
              </p>


            </ul>

          </div>

        </div>

      </div>

    </div>
  )
}

export default DetailCard;
