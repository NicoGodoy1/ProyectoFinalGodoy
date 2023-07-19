import "./Footer.css"
import { BsPhoneFlip, BsFacebook, BsTwitter, BsInstagram, BsWhatsapp } from 'react-icons/bs';

import React from 'react'

export const Footer = () => {
  return (
    <div className="m-5 mt-5"> 
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Comprá en Celuya.com</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Servicio técnico</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Información legal</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Botón de arrepentimiento</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Protección de Usuarios Financieros</a></li>
              </ul>
            </div>
      
            <div className="col-6 col-md-2 mb-3">
              <h5>CeluShop!<BsPhoneFlip/> créditos</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pagá Online</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Catálogo exclusivo</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Condiciones</a></li>
              </ul>
            </div>
      
            <div className="col-6 col-md-2 mb-3">
              <h5>Ayuda</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Centro de ayuda</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contactanos</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Sucursales</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Vendé en CeluYa</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Trabajá con nosotros</a></li>
              </ul>
            </div>
      
            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Suscribete a nuestro boletín de noticias!</h5>
                <p>Recibe mensualmente noticias sobre lo último en tecnología!.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" className="visually-hidden">Correo electrónico</label>
                </div>
              </form>
            </div>
          </div>
      
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top mb-5">
            <p>&copy; 2022 CeluYa, Inc. Todos los derechos reservados.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3"><a className="link-dark" href="#"><i className="bi bi-facebook btn-fb"><BsFacebook/></i></a></li>
              <li className="ms-3"><a className="link-dark" href="#"><i className="bi bi-whatsapp btn-ws"><BsWhatsapp/></i></a></li>
              <li className="ms-3"><a className="link-dark" href="#"><i className="bi bi-twitter btn-tw"><BsTwitter/></i></a></li>
              <li className="ms-3"><a className="link-dark" href="#"><i className="bi bi-instagram btn-ins"><BsInstagram/></i></a></li>
            </ul>
          </div>
        </footer>
    </div>
   
  )
}
