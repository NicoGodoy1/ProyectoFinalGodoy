import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Card/ProductCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "../Product Detail/ProductList.css"





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
            
            <ProductCard data={user} />

          </div>  
        );
      })}

    </div>


  );
};

export default ProductList;