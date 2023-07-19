import React, { useContext } from "react";
import { CartContext } from "../CartContext/ItemsContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Cart.css';
import { BsTrash3 } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { RiShoppingBagFill } from "react-icons/ri";


export const Cart = () => {

  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );


  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const addToCart = (productId) => {
    setCart((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const removeItem = (productId) => {
    setCart((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  return (

    <div className="shopping-cart mt-3">
        <div className="title fs-3 py-3"> Carrito de Compras ({quantity})</div>
        {cart.map((item)=> {
        return (
          <div className="item">

            <div className="image">
              <img 
                src={item.imgUrl} 
                style={{height:"100px", width:"120px"}} 
                alt="FotoProducto" />
            </div>

            <div className="description" style={{ minWidth:"250px"}}>
              <span className="fs-5">{item.name}</span>
              <span className="descripcion-item text-muted" >{item.description}</span>
            </div>

            <div className="total-price m-4 fs-5">${item.price}</div>

            <div className="quantity d-flex flex-row justify-content-around align-items-center mx-4">
              <button 
                className="plus-btn boton m-1 fs-5 btn-light border border-end-0 me-0" 
                onClick={() => removeItem(item.id)}  
                type="button" 
                name="button">
                -
              </button>

              <p className="fs-6 mt-3  btn-light border ms-0 me-0" style={{height:"30px", width:"30px"}}>{item.quantity}</p>
              <button 
                className="minus-btn boton m-1 fs-5 btn-light border border-start-0 ms-0" 
                onClick={() => addToCart(item.id)} 
                type="button" 
                name="button"
              >
                +
              </button>
            </div>
            
            <button 
              className="btn btn-secondary my-4 mx-5" 
              onClick={() => removeFromCart(item.id)}
            >

              <BsTrash3 className="mb-2"/>

            </button>

          </div>
        ) 
      })}
        <div className="my-3">
          <div className="bg-secondary text-white fs-4 opacity-50" >Total: $ {totalPrice}</div>
        </div>
        <div className="d-flex flex-row fixed-bottom" style={{ height:"90px"}}>
          <div className="mx-5 w-100" ></div>
          <div className="mx-5 w-100"></div>
          <Link  style={{ height:"90px"}} to={"/checkout"}>
            <div 
              type="button" 
              className="bg-danger text-white mt-4 mx-5 mb-2 fs-6 rounded-top py-3 px-5 ms-0 pt-4 mb-0" 
              onClick={() => console.log(cart)} 
              style={{ width:"380px"}}
            >

              <RiShoppingBagFill className="mb-1 me-2" />
              FINALIZAR COMPRA  
              ({quantity})  

            </div>
          </Link>
        </div>
  </div>
  );
};
