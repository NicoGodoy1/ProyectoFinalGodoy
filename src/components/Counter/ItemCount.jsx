import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./ItemCount.css";

const Count = () => {

    const [count, setCount] = useState(0);
    
    useEffect (() => {
        console.log("Hola")
    }, [count]);

    const increment = () => {
        setCount(prev => prev + 1);
    };

    return (
    <div className='d-flex justify-content-between m-2'>
      <button onClick={() => setCount(count - 1)}  className="btn-morado mx-2 w-25 h-50 grey"> - </button>
      <p className='fontGrey pt-2 '>{count}</p>
      <button onClick={increment} className="btn-morado mx-2 w-25 h-50 grey"> + </button>
    </div>
  );
}

export default Count;