import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, registerUser, loginUser } from './operations';

export const usersSlice = createSlice({
  name: 'contacts',
  initialState: {
    token: '',
    filter: '',
    error: null,
    isLoading: false,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.contacts = payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.isLoading = true;
      })

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
        console.log(state.token);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = true;
      });
    // 3 takie staty jak wyzej osobno dla login i register
  },
  reducers: {},
});

export default usersSlice.reducer;
