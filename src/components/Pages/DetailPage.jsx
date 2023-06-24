import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import ProductCard from '../Card/ProductCard';
import DetailCard from "../DetailCard/DetailCard"

const DetailPage = () => {
    let { id } = useParams();
    const [user, setUser] = useState({});
  
    useEffect(() => {
      axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
        setUser(res.data)
      );
    }, [id]);
  
    return (
      <div>
        
        {/* <h4>Detail Page</h4> */}
        {user && <DetailCard data={user} />}

      </div>
    );
  };
  
  export default DetailPage;
  



