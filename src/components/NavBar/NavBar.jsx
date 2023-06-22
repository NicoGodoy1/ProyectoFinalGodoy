import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BsPhoneFlip } from 'react-icons/bs';
// import { GrCart } from 'react-icons/gr';
import { BsSearch } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const NavBar = ({ color }) => {

  const navigate = useNavigate();

  return (
    <nav className="fondo-morado opacity-75 text-decoration-none px-5 mt-2 ">
    
      <ul  className="d-flex justify-content-between" style={{ height: "100px", alignItems: "center"}}>

        <li className="fs-1 navbar">
            <i className="text-decoration-none mb-2"  style={{ color: color }} onClick={() => navigate("/")}><BsPhoneFlip /></i>
            <a className="text-decoration-none fw-bolder fs-3 text-white">TechShop</a>
        </li>

        {/* <li  className="navbar text-decoration-none">
          <a  className="text-decoration-none text-white fs-6 dropdown-toggle" href="https://www.megatone.net/" type="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
          <ul className="dropdown-menu dropdown-menu-dark ">
            <li><a className="dropdown-item ">Vehículos</a></li>
            <li><a className="dropdown-item ">Inmuebles</a></li>
            <li><a className="dropdown-item ">Herramientas</a></li>
            <li><a className="dropdown-item ">Construcción</a></li>
            <li><a className="dropdown-item ">Deportes</a></li>
            <li><a className="dropdown-item ">Juegos</a></li>
            <li><a className="dropdown-item ">Jueguetes</a></li>
            <li><a className="dropdown-item ">Tecnología</a></li>
            <li><a className="dropdown-item ">Agro</a></li>
            <li><a className="dropdown-item ">Servicios</a></li>
          </ul>
        </li> */}

        <li  className="navbar text-decoration-none">
          <Link  to="/" className="text-decoration-none text-white fs-6" >Home</Link>
        </li>

        <li  className="navbar text-decoration-none">
          <Link  to="/contact" className="text-decoration-none text-white fs-6" >Contact</Link>
        </li>

        <li  className="navbar text-decoration-none">
          <Link to="/about" className="text-decoration-none text-white fs-6" >About</Link>
        </li>

        
        <ul className="d-flex justify-content-between">
            <li className="navbar mx-1 ms-1">
                <form className="d-flex" role="search">
                    <input className="form-control me-1" type="search" placeholder="Buscar productos" aria-label="Search"/>
                    <button className="btn btn-light" type="submit"><BsSearch /></button>
                    {/* <button className="btn btn-light" type="submit" onClick={() => navigate("/")}><BsSearch /></button> */}
                </form>
            </li>

            <CartWidget />
        </ul>
       
      </ul>
    </nav>
  );
};
export default NavBar;
