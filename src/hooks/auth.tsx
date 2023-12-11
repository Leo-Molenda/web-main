import { createContext, useState, useContext, ReactNode } from 'react';
import api from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

interface AuthState {
  token: string;
  user: User;
}

interface AuthContextData {
  isLoading: boolean;
  user: User;
  signIn(email: string, password: string): Promise<void>;
  signUp(name: string, email: string, password: string): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}
export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<AuthState>(() => {
    setIsLoading(true);

    const token = localStorage.getItem('@AmigosDosJardinetes:token');
    const user = localStorage.getItem('@AmigosDosJardinetes:user');

    if (token && user) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      setIsLoading(false);
      return { token, user: JSON.parse(user) };
    }

    setIsLoading(false);
    return {} as AuthState;
  });

  async function signIn(email: string, password: string) {
    setIsLoading(true);

    try {
      const response = await api.post('/user/signin', {
        email,
        password,
      });

      if (response.status === 200) {
        const { token, user } = response.data;

        localStorage.setItem('@AmigosDosJardinetes:token', token);
        localStorage.setItem('@AmigosDosJardinetes:user', JSON.stringify(user));

        api.defaults.headers.common.Authorization = `Bearer ${token as string}`;

        setData({ token, user });
      } else {
        console.error(response);
      }
    } catch (err) {
      console.error(err);
    }

    setIsLoading(false);
  }

  async function signUp(name: string, email: string, password: string) {
    setIsLoading(true);

    try {
      const response = await api.post('/user/signup', {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        const { token, user } = response.data;

        localStorage.setItem('@AmigosDosJardinetes:token', token);
        localStorage.setItem('@AmigosDosJardinetes:user', JSON.stringify(user));

        api.defaults.headers.common.Authorization = `Bearer ${token as string}`;

        setData({ token, user });
      } else {
        console.error(response);
      }
    } catch (err) {
      console.error(err);
    }

    setIsLoading(false);
  }

  function signOut() {
    setIsLoading(true);

    localStorage.removeItem('@AmigosDosJardinetes:token');
    localStorage.removeItem('@AmigosDosJardinetes:user');

    setData({} as AuthState);
    setIsLoading(false);
  }

  return (
    <AuthContext.Provider
      value={{ isLoading, user: data.user, signIn, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
