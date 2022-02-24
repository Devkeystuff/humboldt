import React, { createContext, useState } from 'react';
import { User } from 'types/User.type';

interface Props {
  children: JSX.Element;
}

export interface IHTTPContext {
  user: User | null;
}

export const HttpContext = createContext<IHTTPContext>(
  new Proxy({} as IHTTPContext, {
    apply: () => {
      throw new Error('You must wrap your component in UserContextProvider');
    },
    get: () => {
      throw new Error('You must wrap your component in UserContextProvider');
    },
  }),
);

export function HttpContextProvider({ children }: Props): React.ReactElement {
  const [user, setUser] = useState<User | null>(null);
  return (
    <HttpContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </HttpContext.Provider>
  );
}
