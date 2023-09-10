import React, { useState } from 'react';
import {
  useStripe,
  useElements,
  PaymentElement,
} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);
  // console.log(localStorage.getItem('downloadData'));
  const downloadData = JSON.parse(localStorage.getItem('downloadData'));
  // );
  const getReturnUrl = () => {
    return downloadData
      ? downloadData.type === 'builder'
        ? `https://cvjury.app/${downloadData.type}/${downloadData.templateName}/${downloadData.documentId}`
        : downloadData.type === 'CoverLetter'
        ? `https://cvjury.app/${downloadData.type}/${downloadData.category}/${downloadData.design}/${downloadData.documentId}`
        : downloadData.type === 'linkedIn'
        ? `https://cvjury.app/${downloadData.type}/edit/${downloadData.documentId}`
        : downloadData.type === 'linkedIn_headline'
        ? `https://cvjury.app/${downloadData.type}/edit/${downloadData.documentId}`
        : 'https://cvjury.app/subscription'
      : 'https://cvjury.app/subscription';
  };
  console.log(getReturnUrl());
  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: getReturnUrl(),
        // return_url: downloadData
        //   ? `https://ui-cvjury.vercel.app/${downloadData.type}/${downloadData.templateName}/${downloadData.documentId}`
        //   : 'https://ui-cvjury.vercel.app/subscription',
      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form className='stripeCheckoutForm' onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={!stripe}>Submit</button>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default CheckoutForm;
