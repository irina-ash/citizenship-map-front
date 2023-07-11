import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./auth.constants";
import { TLoadingState } from "entities/common/common.types";
import { removeTokensFromLocalStorage } from "helpers/tokens";
import { TRootState } from "store";

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setLoadingState(state, action: PayloadAction<TLoadingState>) {
            state.loading = action.payload;
        },
        setToken(state, action: PayloadAction<string>) {
            state.token = action.payload;
        },
        setRefreshToken(state, action: PayloadAction<string>) {
            state.refreshToken = action.payload;
        },
        logout(state) {
            removeTokensFromLocalStorage();
            state.token = null;
            state.refreshToken = null;
            state.loading = 'idle';
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
        removeError(state) {
            state.error = null;
        },
    },
});

export const {
    logout,
    setLoadingState,
    setError,
    setRefreshToken,
    setToken,
    removeError,
} = authSlice.actions;

export default authSlice.reducer;
export const selectAuthState = (state: TRootState) => state.auth;
