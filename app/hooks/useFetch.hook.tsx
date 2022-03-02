import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

export enum Method {
  Post,
  Get,
}

export enum Url {
  Design = '/design',
  Login = '/user/login',
  Register = '/user/register',
}

export enum ErrorMessage {
  NoInternet,
}

interface FetchHook<T> {
  data: T | null;
  error: ErrorMessage | null;
}

export const useFetch = <D, T>(url: Url, method: Method, body: D): FetchHook<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<ErrorMessage | null>(null);

  const handleException = (exc: Error | AxiosError) => {
    if (axios.isAxiosError(exc)) {
      if (exc.response) {
        // Request made and server responded
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
      } else if (exc.request) {
        // The request was made but no response was received
        // console.log(exc.request);
      } else {
        if (typeof window !== 'undefined' && !window.navigator.onLine) {
          setError(ErrorMessage.NoInternet);
        }
        // Something happened in setting up the request that triggered an Error
        // console.log('Error', exc.message);
      }
    } else {
      // Default error
    }
  };

  useEffect(() => {
    if (method === Method.Get) {
      axios
        .get<T>(url, { params: body })
        .then(res => setData(res.data))
        .catch(exc => handleException(exc));
    } else if (method === Method.Post) {
      axios
        .post<T>(url, body)
        .then(res => setData(res.data))
        .catch(exc => handleException(exc));
    }
  }, [url]);

  return { data, error };
};
