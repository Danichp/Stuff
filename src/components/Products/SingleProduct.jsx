import React from "react"
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../features/api/apiSlice";

const SingleProduct = (props) => {
  const {id} = useParams()
  debugger
  const {data} = useGetProductQuery({id})

  console.log(data);

  return (
    <div>
      
    </div>
  )
};

export default SingleProduct;
