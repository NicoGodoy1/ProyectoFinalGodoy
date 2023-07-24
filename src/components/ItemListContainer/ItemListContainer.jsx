import React from "react";
import { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import "./ItemListContainer.css";
import { Spinner } from "react-bootstrap";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";



const ItemListContainer = () => {

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
          return <ItemCard data={item} />
        })
      )}
    </div>
  );
}

export default ItemListContainer;