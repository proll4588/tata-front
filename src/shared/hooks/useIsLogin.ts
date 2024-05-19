import { useMemo } from 'react';
import { token } from '../utils/token';

export const useIsLogin = () => {
  const isLogin = useMemo(() => {
    const data = token.get();
    if (data) return true;
    else return false;
  }, []);

  return isLogin;
};
