import axios, { AxiosRequestConfig } from 'axios';
import React, { createContext } from 'react';

interface Props {
  children: JSX.Element;
}

export interface IHTTPContext {
  post: <B, T>(url: string, params: B, default_response: T) => Promise<T>;
}

export const HttpContext = createContext<IHTTPContext>(
  new Proxy({} as IHTTPContext, {
    apply: () => {
      throw new Error('You must wrap your component in ContentContextProvider');
    },
    get: () => {
      throw new Error('You must wrap your component in ContentContextProvider');
    },
  }),
);

export function HttpContextProvider({ children }: Props): React.ReactElement {
  const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_HOST || 'http://localhost:8000',
  });

  const post = async <B, T>(url: string, params: B, default_response: T): Promise<T> => {
    let response = default_response;
    try {
      let options;
      if (params instanceof FormData) {
        options = {
          headers: {
            'Content-Type': 'multipart/form-data',
            Accept: 'application/json',
          },
        } as AxiosRequestConfig;
      } else {
        // if (this.user && this.user.user_id) {
        //   // @ts-ignore
        //   params.auth_hash = this.auth_hash;
        //   // @ts-ignore
        //   params.user_id = this.user.user_id;
        // } else {
        //   // @ts-ignore
        //   params.auth_hash = "";
        //   // @ts-ignore
        //   params.user_id = 0;
        // }
      }

      response = await client.post<T>(url, params, options).then(val => val.data);
    } catch (e: Error | any) {
      // response.is_success = false;
      // response.error_code = ErrorCode.internet_connection_not_working;
      // response.error_message = ErrorMessage.internet_connection_not_working;
    }
    return response;
  };

  return (
    <HttpContext.Provider
      value={{
        post,
      }}
    >
      {children}
    </HttpContext.Provider>
  );
}
