import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./ProductCard.css";
import { BsCart3 } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from '../CartContext/ItemsContext';



const ProductCard = ({ data }) => {

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
    <div className="d-flex gap-3 justify-content-center align-items-center">

      <div className="tarjeta p-1">

        <div className="card tarjetas__efecto m-1 d-flex justify-content-center align-items-center p-0 pb-4">

          <div>
              <Link to={`/detail/${id}`}><img 
                  src={imgUrl} className="img-fluid m-0 "  
                  style={{height:"300px", width:"340px"}} 
                />
              </Link>
              <div className='card-title text-center fs-4 m-1 fw-bold' >{name}</div>

              <div className='d-flex flex-row justify-content-center align-items-center mx-2'>

                <p className="list-group-item text-center text-decoration-line-through text-muted border-0 rounded-4 text-danger precioAnterior p-1 mb-0 "> 
                  ${precioAnterior}
                </p>

                <p className="bg-danger bg-gradient text-white ms-2 mb-1 redondeado mb-0 opacity-75">
                  10% off
                </p>

              </div>

              <div className="text-center fs-5 text-success fw-bold m-1">${price}</div>
              
              <div className='d-flex flex-row justify-content-between align-items-center mx-2'>

                {quantityPerItem > 0 && (
                  <button 
                    className="btn-morado mx-2 w-25 h-50 grey ms-2" 
                    style={{maxWidth:'26 px' }} 
                    onClick={() => removeItem(id)}
                  >
                    -
                  </button>
                )}

                {quantityPerItem > 0 && (
                  <div className='fs-6'>{quantityPerItem}</div>
                )}

                {quantityPerItem === 0 ? (
                  <div className='d-flex justify-content-center align-items-center w-100 mt-1 '>
                    <button 
                      className="btn-morado mx-1 my-1 mt-4 " 
                      type="button" 
                      style={{ width:"200px"}} 
                      onClick={() => addToCart()}
                    >
                      AGREGAR AL CARRITO 
                      <i className='carrito ms-2 mb-2 pt-1'><BsCart3/></i>
                    </button>
                  </div>
                ) : (
                  
                  <button 
                    className="btn-morado mx-2 w-25 h-50 grey ms-2" 
                    style={{maxWidth:'26 px' }} 
                    onClick={() => addToCart()}
                  >
                    + 
                  </button>
                )}

              </div> 

              {quantityPerItem > 0 && (
                <Link to={`/detail/${id}`}>
                  <div className='d-flex justify-content-center align-items-center '>
                    <button 
                      className="btn-morado mx-3 my-1 w-100 d-flex justify-content-center align-items-center opacity-50" 
                      type="button" 
                      style={{maxWidth:'150 px' }} 
                    >
                      detalle del producto
                    </button>
                  </div> 
                </Link>
              )} 
              {/* <Link to={`/detail/${id}`}>
                  <div className='d-flex justify-content-center align-items-center '>
                    <button 
                      className="btn-morado mx-3 my-1 w-100 d-flex justify-content-center align-items-center opacity-50" 
                      type="button" 
                      style={{maxWidth:'150 px' }} 
                    >
                      detalle del producto
                    </button>
                  </div> 
              </Link> */}
          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;



