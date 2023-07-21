import React, {useState, useContext} from 'react'
import { CartContext } from '../../CartContext/ItemsContext';
import "./CheckoutPage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { TextField } from '@mui/material';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../../firebase/firebaseConfig';
import Message from '../../MessageSuccess/MessageSuccess';

const initialState = {
  email : "",
  phone : "",
  firstName : "",
  lastName : "",
  address : "",
};

const CheckoutPage = () => {

  const [ values, setValues] = useState(initialState);
  const [ purchaseID, setPurchaseID] = useState("");
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
  
  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );
  

  const handleOnChange = (e) => {
    const {value, name} = e.target;
    setValues({...values, [name]: value});
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "purchaseCollection"), {
      values,
    });
    console.log("Document written with ID: ", docRef.id);
    setPurchaseID(docRef.id);
    setValues(initialState);
  };

  return (
    <div>
      <div className='d-grid justify-content-center m-y1'>
      </div>
      <div className="row px-5">
      <h2 className='fs-4'>Checkout</h2>
          <div className="col-75 px-5 mt-5">
              <div className="contenedor ">
                <div>
                
                  <div className="row">
                    <div className="col-50">
                    <form action="" onSubmit={onSubmit}>
                      <h3 className='fs-4 pt-2'>Información de contacto</h3>

                      <TextField
                      className='inputText form-control m-1'
                      placeholder="Correo electrónico *"
                      name='email'
                      value={values.email}
                      onChange={handleOnChange}
                      />
                        
                      <TextField 
                        className='inputText form-control m-1'
                        placeholder="Número de teléfono *"
                        name='phone'
                        value={values.phone}
                        onChange={handleOnChange}
                      />

                      <h3 className='fs-4 pt-2'>Información de envío</h3>

                      <TextField
                        className='inputText form-control m-1'
                        placeholder="Nombre *"
                        name='firstName'
                        value={values.firstName}
                        onChange={handleOnChange}
                      />
                      
                      <TextField 
                        className='inputText form-control m-1'
                        placeholder="Apellido *"
                        name='lastName'
                        value={values.lastName}
                        onChange={handleOnChange}
                      />

                      <TextField 
                        className='inputText form-control m-1'
                        placeholder="Dirección* "
                        name='address'
                        value={values.address}
                        onChange={handleOnChange}
                      />
                      <button type="submit" value="Continue to checkout" className="button">
                        Enviar
                      </button>
                    </form>
                    </div>

                  </div>
                </div>
              </div>
        </div>

        <div className="col-25 mt-5">
          <div className="contenedor">
          <h4> Resumen de Compra <span className="price text-dark"><b>({quantity})</b></span></h4>
          {cart.map((item)=> {
                return (
                  <div className="contenedor d-flex flex-row justify-content-between">
                    <div className="image pt-2">
                      <img 
                        src={item.imgUrl} 
                        style={{height:"80px", width:"100px"}} 
                        alt="FotoProducto"
                      />
                    </div>
                    <p className='d-flex flex-column justify-content-between'>
                      <span className="span text-dark" style={{width:"130px"}}>{item.name}</span>
                      <span className="text-secondary descripcionCheckout" style={{width:"150px"}}>{item.description}</span>
                    </p>
                    <p><span className="span" style={{width:"100px"}}>x{item.quantity}</span></p>
                    <p><span className="span">{item.price}</span></p>
                  </div>
                )})};
                <div className='text-success hr'></div>
                <p>Total<span className="span text-dark" ><b>${totalPrice}</b></span></p>
          </div>
          <div className='d-flex fixed-bottom justify-content-center align-items-center bg-white '>
            <p className='mb-0 pb-0 '>
              {purchaseID && <Message purchaseID={purchaseID}/>}
            </p>
          </div>
        </div>

      </div>


    </div>
  )
}

export default CheckoutPage;