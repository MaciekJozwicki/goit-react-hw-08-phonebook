import { createSlice } from '@reduxjs/toolkit';
import { logoutUser, registerUser, loginUser, refreshUser } from './operations';

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
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.token = payload.token;
      })
      .addCase(registerUser.rejected, state => {
        state.isLoading = true;
      })

      .addCase(loginUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.token = payload.token;
        state.user = payload.email;
      })
      .addCase(loginUser.rejected, state => {
        state.isLoading = true;
      })
      .addCase(logoutUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.isLoading = true;
        state.token = '';
        state.email = '';
      })
      .addCase(logoutUser.rejected, state => {
        state.isLoading = true;
      })
      .addCase(refreshUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(refreshUser.fulfilled, state => {
        state.isLoading = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.token = '';
        state.isLoading = true;
      });
  },
  reducers: {},
});

export default usersSlice.reducer;
