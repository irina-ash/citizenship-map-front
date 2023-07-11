import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./map.constants";
import { TRootState } from "store";
import { TMapViewType } from "./map.types";

const mapSlice = createSlice({
  initialState: INITIAL_STATE,
  name: "map",
  reducers: {
    setMapView(state, action: PayloadAction<TMapViewType>) {
        state.view = action.payload;
    }
  },
});

export const {setMapView} = mapSlice.actions;

export const mapSelector = (state: TRootState) => state.map;

export default mapSlice.reducer;