import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IDeveloperGroupState } from "./developerGroup.types";
import { getDevGroupList } from "./developerGroup.thunks";

export const getDevGroupListCases = (
    builder: ActionReducerMapBuilder<IDeveloperGroupState>,
  ) => {
    builder.addCase(getDevGroupList.pending, state => {
      state.loading = "loading";
      state.error = null;
    });
    builder.addCase(getDevGroupList.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.items = action.payload.data;
    });
    builder.addCase(getDevGroupList.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload?.message;
    });
  };