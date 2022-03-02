import { Method, Url, useFetch } from 'hooks/useUser.hook';
import React, { createContext, useState } from 'react';
import { RequestRegisterUser, ResponseRegisterUser, User } from 'types';

interface Props {
  children: JSX.Element;
}

export interface UserContext {
  user: User | null;
  logIn: (email: string, password: string) => void;
  register: (username: string, email: string, password: string) => void;
}

export const UserContext = createContext<UserContext>(
  new Proxy({} as UserContext, {
    apply: () => {
      throw new Error('You must wrap your component in UserContextProvider');
    },
    get: () => {
      throw new Error('You must wrap your component in UserContextProvider');
    },
  }),
);

export function UserContextProvider({ children }: Props): React.ReactElement {
  const [user, setUser] = useState<User | null>(null);

  const logIn = (email: string, password: string) => {
    setUser({ userId: 1, username: 'test', profilePictureUrl: 'test' });
  };

  const register = async (username: string, email: string, password: string) => {
    const { data, error } = await useFetch<RequestRegisterUser, ResponseRegisterUser>(Url.Login, Method.Post, {
      email,
      username,
      password,
    });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        logIn,
        register,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
