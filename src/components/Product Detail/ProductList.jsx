import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "../Card/ProductCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "../Product Detail/ProductList.css"
import { Spinner } from "react-bootstrap";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";



const ProductList = () => {

  const [items, setItems] = useState([]);

  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      const q = query(collection(db, "items"));
      const querySnapshot = await getDocs(q);

      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItems(docs);
    };
    getItems();
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  return (
    <div  className="container">
      { isLoading ? (
        <div className=" d-flex justify-content-center align-items-center ms-5">
         <div className="mx-5">Cargando...</div>< Spinner />
        </div>

      ) : (
        items.map((item)=> {
          return <ProductCard data={item} />
        })
      )}
    </div>
  );
}

export default ProductList;