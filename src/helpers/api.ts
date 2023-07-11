import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { logout, setLoadingState, setRefreshToken, setToken } from "entities/auth/auth.slice";
import { REFRESH_TOKEN_KEY, TOKEN_KEY } from "entities/auth/auth.constants";
import { ResponseTokens } from "entities/auth/auth.types";
import { WEB_API } from "constants/api";
import { setTokensInLocalStorage } from "./tokens";
import { store } from 'store';
import request from "./request";

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => Promise.reject(error);

const onResponse = (response: AxiosResponse): AxiosResponse => response;

const onResponseError = async (error: AxiosError) => {
    console.log('interceptors onResponse rejected', error);
    if (error?.response?.status === 401) {
      const originalRequest = error?.config;
      const url = 'auth/refresh';
      const refresh_token = localStorage.getItem(REFRESH_TOKEN_KEY);
  
      if (refresh_token && originalRequest?.url !== url) {
        try {
          await store.dispatch(setLoadingState('loading'));
          const rs = await (request.post(url, {refresh_token})) as AxiosResponse<ResponseTokens>;
  
          const {access_token, refresh_token: new_refresh_token} = rs?.data;
  
          setTokensInLocalStorage(access_token, new_refresh_token);
          await store.dispatch(setToken(access_token));
          await store.dispatch(setRefreshToken(new_refresh_token));
          await store.dispatch(setLoadingState('succeeded'));
  
          return new Promise(resolve => {
            originalRequest.headers.Authorization = `Bearer ${access_token}`;
            resolve(axios(originalRequest));
          });
        } catch (_error) {
          store.dispatch(logout());
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(error);
  };

  const Api = axios.create({
    baseURL: WEB_API,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/ld+json',
    },
  });
  
  Api.interceptors.response.use(onResponse, onResponseError);
  
  Api.interceptors.request.use(onRequest, onRequestError);
  
export default Api;  