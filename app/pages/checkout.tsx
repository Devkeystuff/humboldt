import { Elements } from '@stripe/react-stripe-js';
import { Appearance, loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import axios from 'axios';
import CheckoutForm from 'components/CheckoutForm';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ResponsePaymentIntent from 'types/ResponsePaymentIntent.type';

const StyledCheckout = styled.div``;

const stripePromise = loadStripe(
  'pk_test_51KKSBJJHth7Mq4BAyIC7GPhSWjpCY4kbeeBCKg9KHpiVgun2LjACKYlRIi1Hj62UZT1Q89gChhYRP9wLgcKsgwLL00t9PQfiLY',
);
console.log(stripePromise);

interface Props {
  message: string;
}

const Purchase: NextPage<Props> = props => {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    const request = { items: [{ id: 'xl-tshirt' }] };
    axios
      .post<ResponsePaymentIntent>('http://localhost:8000/create-payment-intent', request)
      .then(res => setClientSecret(res.data.client_secret));
  }, []);

  const appearance: Appearance = {
    theme: 'stripe',
  };
  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };

  return (
    <StyledCheckout>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </StyledCheckout>
  );
};

export default Purchase;
