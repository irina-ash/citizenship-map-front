import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./project.constants";
import { projects } from "constants/projects.mock";
import { IProject } from "./project.types";
import { TRootState } from "store";

const projectSlice = createSlice({
  initialState: INITIAL_STATE,
  name: "projects",
  reducers: {
    resetProjects(state) {        
        state.items = projects;
        state.itemsFiltered = projects;
    },
    setProjects(state, action: PayloadAction<IProject[]>) {
        state.items = action.payload;
        state.itemsFiltered = action.payload;
    },
    filterProjectsByUnit(state, action: PayloadAction<string>) {
      const oldItems = state.items;
      state.itemsFiltered = oldItems.filter(item => item.unit?.slug === action.payload);
    },    
  },
});

export const { resetProjects, setProjects, filterProjectsByUnit } = projectSlice.actions;

export const projectSelector = (state: TRootState) => state.projects;

export default projectSlice.reducer;