import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BsCart3 } from 'react-icons/bs';
import { Link } from "react-router-dom";


import { useContext } from "react";
import { CartContext } from '../../context/ItemsContext';


const ProductCard = ({ data }) => {

  const [cart, setCart] = useContext(CartContext);

  let id= data.id;
  console.log(id);
  let price = data.precio;
  console.log(price);
  let imgUrl = data.imagen;
  console.log(imgUrl);
  let name = data.nombre;
  let precioAnterior = data.precio + (data.precio*0.1) 


  const addToCart = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1, price, name, imgUrl, precioAnterior };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: 1, price, name, imgUrl, precioAnterior }];
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
      {quantityPerItem > 0 && (
        <div className="item-quantity">{quantityPerItem}</div>
      )}

      <div>{name}</div>
      <img src={imgUrl} width="80" height="55" />
      <div className="item-price">${price}</div>

      {quantityPerItem === 0 ? (
        <button 
          className="btn-morado mx-1 my-1 w-100 d-flex justify-content-center align-items-center" 
          type="button" 
          style={{maxWidth:'100 px' }} 
          onClick={() => addToCart()}>
          AGREGAR AL CARRITO
        </button>
      ) : (
        <button 
          className="btn-morado mx-2 w-25 h-50 grey opacity-50 ms-2" 
          style={{maxWidth:'26 px' }} 
          onClick={() => addToCart()}>
          + 
        </button>
      )}

      {quantityPerItem > 0 && (
        <button 
          className="btn-morado mx-2 w-25 h-50 grey opacity-50 ms-2" 
          style={{maxWidth:'26 px' }} 
          onClick={() => removeItem(id)}>
          -
        </button>
      )}
    </div>


  );
  
}

export default ProductCard;







