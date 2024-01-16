import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from './operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
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
      .addCase(addContact.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.contacts.push(payload);
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(removeContact.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(removeContact.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(obj => obj.id !== payload.id);
      })
      .addCase(removeContact.rejected, (state, { payload }) => {
        state.isLoading = true;
      });
  },
  reducers: {
  },
});

export default contactsSlice.reducer;
