import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";
import { TAppDispatch, TRootState } from "store";
import { IStack } from "./stack.types";
import { URL_STACKS } from "./stack.api";

export const getStackList = createAsyncThunk<
  AxiosResponse<IStack[]>,
  void,
  {
    dispatch: TAppDispatch;
    rejectValue: AxiosError;
    state: TRootState;
  }
>(
  "stack/getStackList",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        return (await axios.get(URL_STACKS)) as AxiosResponse<IStack[]>;
    } catch (error) {
        return rejectWithValue(error as AxiosError);
    } 
  },
);