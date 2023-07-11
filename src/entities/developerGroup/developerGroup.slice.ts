import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./developerGroup.constants";
import { getDevGroupListCases } from "./developerGroup.reducers";
import { TRootState } from "store";

const devGroupSlice = createSlice({
    initialState: INITIAL_STATE,
    name: "devGroup",
    reducers: {},
    extraReducers(builder) {
        getDevGroupListCases(builder);
    },
});

export default devGroupSlice.reducer;
export const selectDevGroupState = (state: TRootState) => state.devGroup;