import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./ItemCount.css";

const Count = () => {

    const [count, setCount] = useState(0);
    
    useEffect (() => {
        
    }, [count]);

    const increment = () => {
        setCount(prev => prev + 1);
    };

    return (

      <div className='w-100 d-flex justify-content-center align-items-center altura contadorContainer h-25'>

        <button 
          onClick={() => setCount(count - 1)}  
          className="btn-morado mx-2 w-25 h-50 grey opacity-50 ms-2" 
          style={{maxWidth:'26 px' }}>
           - 
        </button>

        <p className='fontGrey pt-3 mx-5 '>
          {count}
        </p>

        <button 
          onClick={increment} 
          className="btn-morado mx-1 w-25 h-50 grey opacity-50 ">
           + 
        </button>

      </div>
  );
}

export default Count;