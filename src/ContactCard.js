import React, {useState, useEffect} from "react"
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

function ContactCard(props) {
    console.log(props)

    const [product1,setProduct] = React.useState({

    });

    React.useEffect(()=>{
        setProduct(props.product)
    },[props])

    toast.configure();

    async function handleToken(token, addresses) {
      const response = await axios.post(
        "http://localhost:8080/payment",
        { product1, token }
      );
      const { status } = response.data;
      console.log("Response:", response.data);
      if (status === "success") {
        toast("Success! Check email for details", { type: "success" });
      } else {
        toast("Something went wrong. Please try again", { type: "error" });
      }
    }

    return (
        <div className="col-md-4 col-sm-12">
            <div className="product-card">
                <img src={props.product.imgUrl}/>
                <h2>{props.product.name}</h2>
                <h3>Rent Price: {props.product.price} /week</h3>
                <p>Phone: <a style = {{color:"black"}} href={"tel:" + props.product.contactUs}>{props.product.contactUs}</a></p>
                <p>Email: <a style = {{color:"black"}} href={"mailto:" + props.product.email}>{props.product.email}</a></p>

                <StripeCheckout
                  stripeKey="pk_test_51HN2HjIHCbP4Y2mrvdcofoOJT98osVD6IUwfrfStzJrcJqXcxjeqbpe6hpL4m5s8wN0m4AznY2uhUHpY5mUqVYMr00P7kBMa3I"
                  token={handleToken}
                  amount={props.product.checkoutPrice * 100}
                  name={props.product.name}
                  billingAddress
                  shippingAddress
                />
            </div>
        </div>
    )
}

export default ContactCard
