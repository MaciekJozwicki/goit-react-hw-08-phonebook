import { createSlice } from '@reduxjs/toolkit';
import { logoutUser, registerUser, loginUser } from './operations';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    token: '',
    user: '',
    error: null,
    isLoading: false,
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.contacts = payload;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = true;
      })

      .addCase(loginUser.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.token = payload.token;
        state.user = payload.email;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.token = '';
        state.email = '';
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.isLoading = true;
      });
  },
  reducers: {},
});

export default usersSlice.reducer;
