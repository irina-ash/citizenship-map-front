import { ActionReducerMapBuilder, PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE, initialUsers } from "./user.constants";
import { IGetUsersParams, IUser, IUserCollection, IUserState, TWorkType } from "./user.types";
import { TAppDispatch, TRootState } from "store";
import { AxiosError, AxiosResponse } from "axios";
//import api from "helpers/api";
import { ResponseError } from "entities/common/common.types";

/*export const getUsersThunk = createAsyncThunk<
  AxiosResponse<IUserCollection>,
  IGetUsersParams,
  {
    dispatch: TAppDispatch;s
    rejectValue: AxiosError;
    state: TRootState;
  }
>("users/getUsersThunk", async (params, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  const url = "/users";
  try {
    return (await api.get(url, { params })) as AxiosResponse<IUserCollection>;
  } catch (error) {
    return rejectWithValue(error as AxiosError<ResponseError>);
  }
});

const getUsersThunkCases = (builder: ActionReducerMapBuilder<IUserState>) => {
  builder.addCase(getUsersThunk.pending, (state, action) => {
    state.loading = 'loading';
    state.error = null;
  });
  builder.addCase(getUsersThunk.fulfilled, (state, action) => {
    const items = action.payload?.data?.["hydra:member"] || [];
    state.loading = 'succeeded';
    state.items = items;
    state.itemsFiltered = items;
  });
  builder.addCase(getUsersThunk.rejected, (state, action) => {
    state.loading = 'failed';
    const resp = action.payload?.response;
    state.error =
      resp?.['hydra:description'] ?? 'Неверно введён логин или пароль.';
  });
};*/

const usersSlice = createSlice({
  initialState: INITIAL_STATE,
  name: "users",
  /*extraReducers: (builder) => {
    getUsersThunkCases(builder);
  },*/
  reducers: {
    resetUsers(state) {        
        state.items = initialUsers;
        state.itemsFiltered = initialUsers;
    },
    setUsers(state, action: PayloadAction<IUser[]>) {
        state.items = action.payload;
        state.itemsFiltered = action.payload;
    },
    filterUsersByTeam(state, action: PayloadAction<TWorkType>) {
        const oldItems = state.items;
        state.itemsFiltered = oldItems.filter(item => item.workRoles.includes(action.payload));
    },
    filterUsersByProject(state, action: PayloadAction<string>) {
      const oldItems = state.items;
      state.itemsFiltered = oldItems.filter(item => !!item.projectsAsDeveloper.find(p => p["@id"] === action.payload) || !!item.projectsAsManager.find(p => p["@id"] === action.payload));
    },
    filterUsersByUnit(state, action: PayloadAction<string>) {
      const oldItems = state.items;
      state.itemsFiltered = oldItems.filter(item => item.unit?.slug === action.payload);
    },    
  },
});

export const { 
  resetUsers, 
  setUsers, 
  filterUsersByTeam, 
  filterUsersByProject, 
  filterUsersByUnit 
} = usersSlice.actions;

export const userSelector = (state: TRootState) => state.users;

export default usersSlice.reducer;