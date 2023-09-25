import {PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IUserState {
  currentUser:  null;
  isLoading: boolean;
  error: any;
}

const INITIAL_STATE: IUserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state: IUserState, action: PayloadAction<null>) {
      state.currentUser = action.payload;
    },
    resetCurrentUser(state: IUserState) {
      state.currentUser = null;
    },
  },
});

export const { setCurrentUser, resetCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
