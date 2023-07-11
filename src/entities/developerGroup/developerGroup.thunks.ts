import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";
import { TAppDispatch, TRootState } from "store";
import { IDeveloperGroup } from "./developerGroup.types";
import { URL_DEV_GROUPS } from "./developerGroup.api";

export const getDevGroupList = createAsyncThunk<
  AxiosResponse<IDeveloperGroup[]>,
  void,
  {
    dispatch: TAppDispatch;
    rejectValue: AxiosError;
    state: TRootState;
  }
>(
  "devGroup/getDevGroupList",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        return (await axios.get(URL_DEV_GROUPS)) as AxiosResponse<IDeveloperGroup[]>;
    } catch (error) {
        return rejectWithValue(error as AxiosError);
    } 
  },
);