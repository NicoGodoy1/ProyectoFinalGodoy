import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Card/ProductCard";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "../Product Detail/ProductList.css"
import { BsCart3 } from 'react-icons/bs';
import Count from '../Counter/ItemCount';




const ProductList = () => {
    const [users, setUsers] =  useState([]);

    useEffect(() => {
      axios("https://jsonplaceholder.typicode.com/users/").then((res) =>
        setUsers(res.data)
      );

    }, [])      

  return (
    <div className="container">
      {users.map((user) => {
        return (
          <div key={user.id}>
          {/* <h1>Estoy en lista de producto</h1> */}
            <ProductCard data={user} />
          </div>  
        );
      })}
    </div>


  );
};

export default ProductList;