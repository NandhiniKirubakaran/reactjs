import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { Col, Row, Card, CardTitle, Button, } from "reactstrap";



export default function CartListing({ mobile = {} }) {

  const makePayment = (token) => {
    const body = {
      token,
      mobile,
    };
     const headers = {
      "Content-type":"appliccation/json"
     };
      return fetch("http://localhost:7000/payment",{
      method: "POST",
      headers,
      body: JSON.stringify(body),
    }).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    });
  };


  return (
    <div className="cart-listing">
      <div className="cart-listing-details">
      <img width={"200px"} src={mobile.img} />
      <CardTitle tag="h4">{mobile.model}</CardTitle>
      <p><b>{mobile.price}</b></p>
      </div>

      <div className="cart-listing-quantity">
      {/* <Quantity quantity={mobile.quantity} /> */}
      </div>
      <div>
        <StripeCheckout
        stripeKey="pk_test_51N2XAPSInoBADsEnXnLidneOVwfTWpLCoAOO39k7WWyzUT2sGGe05kMEmnMZBxapZZW9Kv5odnIl7XfEir07A9Ln00mBng7jWk"
        name={mobile.model}
        amount={mobile.price}
        currency="INR"
        token={makePayment}
        >
        <button className="checkout-button"><span className="checkout">Checkout</span></button>
        </StripeCheckout>
        
      </div>
    </div>
  );
}



