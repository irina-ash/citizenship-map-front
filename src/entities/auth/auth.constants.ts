import { IAuthState } from "./auth.types";
import { getValueFromLocalStorage } from "helpers/tokens"

export const TOKEN_KEY = 'token';
export const REFRESH_TOKEN_KEY = 'refreshToken';

export const initialState: IAuthState = {
    loading: 'idle',
    error: null,
    token: getValueFromLocalStorage(TOKEN_KEY),
    refreshToken: getValueFromLocalStorage(REFRESH_TOKEN_KEY),
};

