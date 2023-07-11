import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IStackState } from "./stack.types";
import { getStackList } from "./stack.thunks";

export const getStackListCases = (
    builder: ActionReducerMapBuilder<IStackState>,
  ) => {
    builder.addCase(getStackList.pending, state => {
      state.loading = "loading";
      state.error = null;
    });
    builder.addCase(getStackList.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.items = action.payload.data;
    });
    builder.addCase(getStackList.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload?.message;
    });
  };