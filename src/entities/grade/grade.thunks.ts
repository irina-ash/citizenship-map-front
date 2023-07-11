import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";
import { TAppDispatch, TRootState } from "store";
import { IGrade } from "./grade.types";
import { URL_GRADES } from "./grade.api";

export const getGradeList = createAsyncThunk<
  AxiosResponse<IGrade[]>,
  void,
  {
    dispatch: TAppDispatch;
    rejectValue: AxiosError;
    state: TRootState;
  }
>(
  "grade/getGradeList",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        return (await axios.get(URL_GRADES)) as AxiosResponse<IGrade[]>;
    } catch (error) {
        return rejectWithValue(error as AxiosError);
    } 
  },
);