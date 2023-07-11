import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./profile.constants";
import { TRootState } from "store";

const profileSlice = createSlice({
  initialState: INITIAL_STATE,
  name: "profile",
  reducers: {},
});

export const profileSelector = (state: TRootState) => state.profile;

export default profileSlice.reducer;