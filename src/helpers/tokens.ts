import { REFRESH_TOKEN_KEY, TOKEN_KEY } from "entities/auth/auth.constants";

export const setTokensInLocalStorage = (
    token: string,
    refreshToken: string,
  ) => {
    try {
      localStorage.setItem(TOKEN_KEY, token);
      localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    } catch (e) {
      console.error(e);
    }
  };
  
  export const removeTokensFromLocalStorage = () => {
    try {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(REFRESH_TOKEN_KEY);
    } catch (e) {
      console.error(e);
    }
  };

  export const getValueFromLocalStorage = (key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch (err) {
      return null;
    }
  };  