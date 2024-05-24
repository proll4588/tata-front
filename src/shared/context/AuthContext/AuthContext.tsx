import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { token } from '../../utils/token';

interface AuthContextFields {
  isLogin: boolean;
  auth: (token: string) => void;
  logOut: () => void;
  getToken: () => string | undefined;
}
const AUTH_CONTEXT_INIT: AuthContextFields = {
  isLogin: false,
  auth: () => {},
  logOut: () => {},
  getToken: () => {
    return undefined;
  },
};
export const AuthContext = createContext<AuthContextFields>(AUTH_CONTEXT_INIT);
export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const data = token.get();
    if (data) setIsLogin(true);
  }, []);

  const logOut = () => {
    token.clear();
    setIsLogin(false);
  };

  const auth = (tokenStr: string) => {
    token.save(tokenStr);
    setIsLogin(true);
  };

  const getToken = () => {
    return token.get()?.token;
  };

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        logOut,
        auth,
        getToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
