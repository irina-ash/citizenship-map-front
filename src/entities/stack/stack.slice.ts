import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./stack.constants";
import { getStackListCases } from "./stack.reducers";
import { TRootState } from "store";

const stackSlice = createSlice({
    initialState: INITIAL_STATE,
    name: "stack",
    reducers: {},
    extraReducers(builder) {
        getStackListCases(builder);
    },
});

export default stackSlice.reducer;
export const selectStackState = (state: TRootState) => state.stack;