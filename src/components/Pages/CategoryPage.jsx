import React, { useEffect, useState , useContext } from "react";
import { useParams } from "react-router-dom";
import ProductCard from '../Card/ProductCard';
import { Spinner } from "react-bootstrap";
import { CartContext } from "../CartContext/ItemsContext";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where, documentId, } from "firebase/firestore";






const CategoryPage = () => {

  const [items, setItems] = useState([]);

  const { familia } = useParams();

  const [ isLoading, setIsLoading ] = useState(true);
  
  const [cart, setCart] = useContext(CartContext);


  useEffect(() => {
    const getItems = async () => {
      const q = query(
        collection(db, "items"),
        where("familia", "==", familia)
        );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItems(docs);
    };
    getItems();
    setTimeout(() => {
      setIsLoading(false);
    }, 300);

  }, [familia]);

  return (
    <div>
      <h1 className="text-primary fs-5 mt-4 opacity-75 ">{familia}</h1>
      <div class="text-success">
        <hr className="d-flex justify-content-center align-items-center mx-5"/>
      </div>
      <div  className="container ms-5">
      { isLoading ? (
        <div className=" d-flex justify-content-center align-items-center ms-5">
            <div className="ms-5"></div><div className="mx-5">Cargando...</div>< Spinner />
        </div>

      ) : (
        items.map((item)=> {
          return (
            <div className="ms-5">
              <ProductCard data={item} />
            </div>
          ) 
        })
      )}
    </div>
    </div>
  );
;}

export default CategoryPage;






