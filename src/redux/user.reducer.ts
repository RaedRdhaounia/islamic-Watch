import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {ImpactFeedbackStyle} from 'expo-haptics';

export interface UserState {
  email: string | undefined;
  loading: boolean;
  error: string | undefined;
}

const initialState: UserState = {
  email: undefined,
  loading: false,
  error: undefined,
};

export const userDetails = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    getUserDetails: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      (state.email = action.payload, state.loading = false);
    },
    loading: (state) => {
      state.loading = true;
    },
    errors: (state, action: PayloadAction<string>) => {
      (state.loading = false, state.error = action.payload);
    },
    logout: (state) => {
      (state.email = undefined, state.loading = false);

    }
  },
});

// Action creators are generated for each case reducer function
export const {loading, getUserDetails, errors, logout} = userDetails.actions;

export default userDetails.reducer;
