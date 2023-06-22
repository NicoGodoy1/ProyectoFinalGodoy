import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BsPhoneFlip } from 'react-icons/bs';
// import { GrCart } from 'react-icons/gr';
import { BsSearch } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// CARRITO MUI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Cart } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height:400,
  bgcolor: 'background.paper',
  border: '5px solid yellow',
  boxShadow: 24,
  p: 4,
};



const NavBar = ({ color }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  return (
    <nav className="fondo-morado opacity-75 text-decoration-none px-5 mt-2 ">
    
      <ul  className="d-flex justify-content-between" style={{ height: "100px", alignItems: "center"}}>

        <li className="fs-1 navbar">
            <i className="text-decoration-none mb-2"  style={{ color: color }} onClick={() => navigate("/")}><BsPhoneFlip /></i>
            <a className="text-decoration-none fw-bolder fs-3 text-white">TechShop</a>
        </li>

        <li  className="navbar text-decoration-none">
          <Link  to="/" className="text-decoration-none text-white fs-6" >Inicio</Link>
        </li>

        <li  className="navbar text-decoration-none">
          <Link  to="/contact" className="text-decoration-none text-white fs-6" >Contacto</Link>
        </li>

        <li  className="navbar text-decoration-none">
          <Link to="/about" className="text-decoration-none text-white fs-6" >Acerca de</Link>
        </li>

        
        <ul className="d-flex justify-content-between">
            <li className="navbar mx-1 ms-1">
                <form className="d-flex" role="search">
                    <input className="form-control me-1" type="search" placeholder="Buscar productos" aria-label="Search"/>
                    <button className="btn btn-light" type="submit"><BsSearch /></button>
                    {/* <button className="btn btn-light" type="submit" onClick={() => navigate("/")}><BsSearch /></button> */}
                </form>
            </li>
            {/* <Link to="/cart">
              <CartWidget />
            </Link> */}
          <Button onClick={handleOpen}><CartWidget /></Button>
        </ul>
       
      </ul>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className='bg-warning bg-gradient' id="modal-modal-title" variant="h6" component="h2">
            Carrito <Cart/>
          </Typography>
          <div className="m-5">
            <li className='fs-6'>Producto 1</li>
            <li className='fs-6'>Producto 2</li>
            <li className='fs-6'>Producto 3</li>
            <li className='fs-6'>Producto 4</li>
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Acá vas a ver los productos que agregues al carrito
          </Typography>
        </Box>
      </Modal>
    </nav>
  );
};
export default NavBar;
