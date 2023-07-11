import { TLoadingState } from "entities/common/common.types";

/** Ответ сервера на успешную авторизацию  */
export interface ResponseTokens {
    access_token: string;
    refresh_token: string;
    id_token: string;
    expires_in: number;
    refresh_expires_in: number;
    scope: string;
    session_state: string;
    token_type: string;
}

export interface IAuthState {
    error: string | null;
    token: string | null;
    refreshToken: string | null;
    loading: TLoadingState;
}