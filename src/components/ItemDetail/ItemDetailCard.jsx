import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./ItemDetailCard.css"
import { BsCart3, BsTruck, BsShop} from 'react-icons/bs';
// import Count from '../Counter/ItemCount';

import { useContext } from 'react';
import { CartContext } from '../CartContext/ItemsContext';

const ItemDetailCard = ({ data }) => {

  const [cart, setCart] = useContext(CartContext);

  let id= data.id;
  let price = data.precio;
  let imgUrl = data.imagen;
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
            className="card-img-top img-fluid mt-3" 
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
              
              <li className='d-flex justify-content-center align-items-center mt-2' style={{ maxHeight:"70px"}}>

                {quantityPerItem > 0 && (
                  <button 
                    className="btn-morado w-25 ms-5 mx-4  mt-2" 
                    style={{width:'100 px', maxHeight:"50px" }} 
                    onClick={() => removeItem(id)}
                  >
                    -
                  </button>
                )}

                {quantityPerItem === 0 ? (
                    <button 
                      className="btn-morado mx-1 my-1 mt-4 w-100 mx-5 " 
                      type="button" 
                      style={{ width:"600px", height:"30px"}} 
                      onClick={() => addToCart()}
                    >
                      AGREGAR AL CARRITO 
                      <i className='carrito ms-2 mb-2 pt-1'><BsCart3/></i>
                    </button>
                  
                
                ) : (
                  
                  <button 
                    className="btn-morado mx-4 mt-2 grey ms-2 w-25" 
                    style={{width:'100 px', maxHeight:"50px" }} 
                    onClick={() => addToCart()}
                  >
                    + 
                  </button>
                )}

              </li> 

              <p
                className='bg-primary text-white fs-6 opacity-50 mt-2'
                style={{height:"30 px", width:"100 px"}}
              >
                Items agregados: {quantityPerItem}
              </p>

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
