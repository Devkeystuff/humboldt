export default interface ResponsePaymentIntent {
  client_secret: string;
  is_success: boolean;
  error_code?: number;
  error_message?: string;
}
