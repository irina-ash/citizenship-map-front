import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IGradeState } from "./grade.types";
import { getGradeList } from "./grade.thunks";

export const getGradeListCases = (
    builder: ActionReducerMapBuilder<IGradeState>,
  ) => {
    builder.addCase(getGradeList.pending, state => {
      state.loading = "loading";
      state.error = null;
    });
    builder.addCase(getGradeList.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.items = action.payload.data;
    });
    builder.addCase(getGradeList.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload?.message;
    });
  };