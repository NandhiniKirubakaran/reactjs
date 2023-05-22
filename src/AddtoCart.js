import { useSelector } from "react-redux";
import CartListing from "./CartListing";
import React from "react";



export function AddtoCart() {

  const { items = [] } = useSelector((state) => state.cart);

  return (
    <div className="app-container d-flex">
      
    <div className="card-product-listing p-5">
        <h5 className="mb-3">Cart Items ({items.length})</h5>
        <div className="cart-listing ">
         {
           items.map((item, index) => <CartListing key={index} mobile={item} />)
         }
        </div>
    </div>

    

   </div> 
  );
}


