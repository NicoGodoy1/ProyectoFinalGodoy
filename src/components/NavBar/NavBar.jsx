import React from "react";
import CartWidget from "../Cart/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BsPhoneFlip } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NavBar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useContext } from "react";
import { CartContext } from "../CartContext/ItemsContext";



const NavBar = ({ color }) => {

  const navigate = useNavigate();

  const familias = ['Familia E', 'Familia G', 'Familia EDGE']

  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <nav className="fondo-morado  text-decoration-none px-5 mt-2 sticky-top ">
    
      <ul  className="d-flex justify-content-between" style={{ height: "100px", alignItems: "center"}}>

        <li className="fs-1 navbar">
            <i 
              className="text-decoration-none mb-2"  
              style={{ color: color }} 
              onClick={() => navigate("/")}
            >
            <BsPhoneFlip />
            </i>
            <a className="text-decoration-none fw-bolder fs-3 text-white">CeluShop</a>
        </li>

        <li  className="navbar text-decoration-none">
          <Link  to="/" className="text-decoration-none text-white fs-6" >Inicio</Link>
        </li>

        <li  className="navbar text-decoration-none">
        {familias.map((familia) => (      

          <Link 
           className="text-decoration-none text-white fw-bold fs-6 mx-3 hover-underline-animation"
            to={`/category/${familia.toLowerCase()}`}
          >
            {familia}
            
          </Link>

          ))}
        </li>

        
        <ul className="d-flex justify-content-between">
            <li className="navbar mx-5 ms-1">
              <p className="mt-1">¡Gracias por visitar nuestro sitio!</p>
            </li>
            <Link to="/cart">
              <CartWidget valor={quantity}/>
            </Link>
        </ul>
      </ul>
    </nav>
  );
};
export default NavBar;
