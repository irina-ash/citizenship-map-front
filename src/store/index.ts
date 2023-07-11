import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const exampleInitialState = {};

export const makeStore = (initialState = exampleInitialState) =>
  configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    preloadedState: initialState,
    reducer: rootReducer,
  });

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

export const store = makeStore();

export type TAppDispatch = typeof store.dispatch;
export type TRootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<TAppDispatch>();