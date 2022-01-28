import React, { useEffect, useState } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useRouter } from 'next/router';
import { FormControl } from './styled/FormControl.styled';
import { Button } from './styled/Button.styled';
import { BounceLoader } from 'react-spinners';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    try {
      if (!stripe) {
        return;
      }

      const clientSecret = router.query.payment_intent_client_secret;

      if (!clientSecret) {
        return;
      }

      stripe.retrievePaymentIntent(clientSecret as string).then(({ paymentIntent }) => {
        switch (paymentIntent && paymentIntent.status) {
          case 'succeeded':
            setMessage('Payment succeeded!');
            break;
          case 'processing':
            setMessage('Your payment is processing.');
            break;
          case 'requires_payment_method':
            setMessage('Your payment was not successful, please try again.');
            break;
          default:
            setMessage('Something went wrong.');
            break;
        }
      });
    } catch (exc) {
      console.log(exc);
    }
  }, [stripe]);

  const handleSubmit = async () => {
    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: 'http://localhost:3000/checkout',
        receipt_email: email,
      },
    });

    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message || '');
    } else {
      setMessage('An unexpected error occured.');
    }

    setIsLoading(false);
  };

  return (
    <div>
      <FormControl type={'email'} value={email} onChange={e => setEmail(e.target.value)} />
      <PaymentElement id="payment-element" />
      <Button onClick={handleSubmit} type="button" disabled={isLoading || !stripe || !elements}>
        <span id="button-text">{isLoading ? <BounceLoader /> : 'Pay now'}</span>
      </Button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </div>
  );
}
