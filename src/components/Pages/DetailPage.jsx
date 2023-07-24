import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailCard from "../ItemDetail/ItemDetailCard";
import { Spinner } from "react-bootstrap";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where, documentId, } from "firebase/firestore";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import Greeting from "../GreetingContainer/Greeting"




export const DetailPage = () => {
  return (
    <div>
      <Greeting greeting={"¡Agregá el producto al carrito!"}/>
      <ItemDetailContainer/>
    </div>
  )
}



// const DetailPage = () => {

//   const [items, setItems] = useState([]);

//   const { id } = useParams();

//   const [ isLoading, setIsLoading ] = useState(true);


//   useEffect(() => {
//     const getItems = async () => {
//       const q = query(
//         collection(db, "items"),
//         where(documentId(), "==", id)
//         );
//       const docs = [];
//       const querySnapshot = await getDocs(q);
//       querySnapshot.forEach((doc) => {
//         docs.push({ ...doc.data(), id: doc.id });
//       });
//       setItems(docs);
//     };
//     getItems();
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 300);

//   }, [id]);

//   return (
//     <div>
//       { isLoading ? (
//         <div>
//           < Spinner />
//         </div>

//       ) : (
//         items.map((item)=> {
//           return < ItemDetailCard data={item} />
//         })
//       )}
//     </div>
//   );
// ;}

// export default DetailPage;