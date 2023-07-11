import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./grade.constants";
import { getGradeListCases } from "./grade.reducers";
import { TRootState } from "store";

const gradeSlice = createSlice({
    initialState: INITIAL_STATE,
    name: "grade",
    reducers: {},
    extraReducers(builder) {
        getGradeListCases(builder);
    },
});

export default gradeSlice.reducer;
export const selectGradeState = (state: TRootState) => state.grade;