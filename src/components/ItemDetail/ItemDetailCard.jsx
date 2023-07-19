import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./ItemDetailCard.css"
import { BsCart3, BsTruck, BsShop} from 'react-icons/bs';

import { useContext } from 'react';
import { CartContext } from '../CartContext/ItemsContext';

const ItemDetailCard = ({ data }) => {

  const [cart, setCart] = useContext(CartContext);

  let id= data.id;
  console.log(id);
  let price = data.precio;
  console.log(price);
  let imgUrl = data.imagen;
  console.log(imgUrl);
  let name = data.nombre;
  let precioAnterior = data.precio + (data.precio*0.1) 
  let description = data.descripcion


  const addToCart = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1, price, name, imgUrl, precioAnterior, description };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: 1, price, name, imgUrl, precioAnterior, description }];
      }
    });
  };

  const removeItem = (id) => {
    
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(id);

  return (
    <div className="fondo d-flex gap-3 justify-content-center align-items-center w-100">

      <div className=" detailcard tarjeta FlexContainer fondoGradiente ">

        <div >

          <img 
            src={data.imagen} 
            className="card-img-top img-fluid" 
            style={{height:"500px", width:"500px"}} alt="" 
          /> 

          <h4 className='fw-semibold mt-2'>
            {data.nombre}
          </h4>

        </div>


        <div className="card mb-2 justify-content-center align-items-center d-flex justify-content-center" >

          <div className="card-body f-6 m-1 p-1 d-flex align-items-center justify-content-center">

            <ul className="list-group list-group-flush">

              <h5 className="card-title text-center fs-2 fw-bold" >
                {data.nombre}
              </h5>

              <li className="list-group-item text-center fs-6 fw-bold my-4 text-secondary">
                {data.descripcion}
              </li>


              <h6 className="d-flex fs-4 justify-content-center align-items-center text-center fs-2 text-success fw-bold">
          
                <p className='fs-3 ms-2 redondeado mb-3 my-4'>
                  ${data.precio}
                </p>

              </h6>
              
              <button 
                className="btn-morado align-items-center mx-2 my-2 fs-6 " 
                type="button" 
                onClick={() => addToCart()}
              >
                AGREGAR AL CARRITO 

              </button>

              {quantityPerItem > 0 && (
                  <button 
                    className="btn-morado align-items-center mx-2 my-2 fs-6 " 
                    style={{maxWidth:'26 px'}} 
                    onClick={() => removeItem(id)}
                  >
                    QUITAR DEL CARRITO
                  </button>
                )}

                {quantityPerItem > 0 && (
                  <p className="bg-primary text-white mx-2 my-2 mt-5 fs-6 opacity-50 " 
                    style={{maxWidth:'26 px' }} 
                    onClick={() => removeItem(id)}
                  >
                    cantidad de este item en el carrito: {quantityPerItem}
                  </p>
                )}

              <p className='mt-3 d-flex flex-column align-items-start justify-content-center'>
                <p className='fs-6 '  style={{textDecoration:"None"}} ><i className='fs-2 mx-2'>
                  <BsTruck />
                  </i>Envío a Córdoba (5000): $1299 Entrega estimada 3 días habiles
                </p>

                <p className=''><i className='fs-2 mx-2'>
                  <BsShop />
                  </i>Retiro GRATIS en sucursal<i className='text-success'> ¡Retiralo YA!</i>
                </p>
              </p>


            </ul>
          
          </div>

        </div>

      </div>

    </div>
  )
}

export default ItemDetailCard;
