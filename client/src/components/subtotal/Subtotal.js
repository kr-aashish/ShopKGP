import React, {useContext} from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
import { Box, Divider, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PrimaryButton from "../buttons/PrimaryButton";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';
import Swal from 'sweetalert2';
import { loadStripe } from '@stripe/stripe-js';
import {UserContext} from "../../user_context/Context";
const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);

function ElementTable({ data }) {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent="space-between"
        pt={"15px"}
        pb={"15px"}
      >
        <p>{data?.first}</p>
        <strong>{data?.second}</strong>
      </Box>
      <Divider />
    </>
  );
}
// const handleToken = async (token, address) => {
//     const product = {
//         name: "Sample product",
//         price: 200,
//         description: "This is a sample product"
//     };
//
//     try {
//         const response = await axios.post("http://localhost:3001/checkout", {token, product, address});
//         console.log(response.status);
//
//         //clear the basket post successful checkout
//     } catch (error) {
//         Swal.fire({
//             icon: 'success',
//             title: 'Your order has been placed!',
//             showConfirmButton: false,
//             timer: 2500
//         });
//     }
// }

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    const { user_dispatch, state } = useContext(UserContext);

    const userMetadata = state.data.metadata;

    const createCheckoutSession = async (email, address) => {
        // Swal.fire({
        //     title: 'Submit your Github username',
        //     input: 'text',
        //     inputAttributes: {
        //         autocapitalize: 'off'
        //     },
        //     showCancelButton: true,
        //     confirmButtonText: 'Look up',
        //     showLoaderOnConfirm: true,
        //     iconColor: 'orange',
        //
        //     preConfirm: (login) => {
        //         return fetch(`//api.github.com/users/${login}`)
        //             .then(response => {
        //                 if (!response.ok) {
        //                     throw new Error(response.statusText)
        //                 }
        //                 return response.json()
        //             })
        //             .catch(error => {
        //                 Swal.showValidationMessage(
        //                     `Request failed: ${error}`
        //                 )
        //             })
        //     },
        //
        //     allowOutsideClick: () => !Swal.isLoading()
        //
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         Swal.fire({
        //             title: `${result.value.login}'s avatar`,
        //             imageUrl: result.value.avatar_url
        //         })
        //     }
        // })

        // console.log(userMetadata);
        // console.log(basket);

        // const stripe = await stripePromise;
        const response = axios.post(`${process.env.REACT_APP_API_URL}/checkout`, {
            userMetadata,
            basket,
        });
    }

  return (
    <Box
      style={{
        backgroundColor: "#EFF5F5FB",
        borderRadius: "20px",
        padding: "20px",
        width: "100%",
      }}
    >
      <ElementTable
        data={{
          first: "Subtotal",
          second: `Rs. ${getBasketTotal(basket).toFixed(2)}`,
        }}
      />
      <ElementTable
        data={{
          first: "GST and tax.",
          second: `Rs. ${(getBasketTotal(basket) * 0.03).toFixed(2)}`,
        }}
      />
      <ElementTable
        data={{
          first: "Total",
          second: `Rs. ${(
            getBasketTotal(basket) +
            getBasketTotal(basket) * 0.03
          ).toFixed(2)}`,
        }}
      />
      <p style={{ marginTop: "10px", fontSize: "12px" }}>
        *Total price includes shipping, and service charges
      </p>

      {/*<StripeCheckout*/}
      {/*  stripeKey="pk_test_51MiJLISGFdXiDdCYLBEIOLFv6lSfw7pK2zV5VceYPUvxKYSiFY4rdVAJMdNzUqrQWkhsxlx72qrDxGOtpKUEvlpp00kfIxV7mg"*/}
      {/*  token={handleToken}*/}
      {/*  amount={getBasketTotal(basket) * 1.03}*/}
      {/*  name="Payment Gateway"*/}
      {/*  billingAddress*/}
      {/*  shippingAddress*/}
      {/*>*/}
      {/*  <PrimaryButton text={"proceed"} />*/}
      {/*</StripeCheckout>*/}

    <PrimaryButton
        text={"Checkout"}
        onClick = {createCheckoutSession } />
    </Box>
  );
}

export default Subtotal;
