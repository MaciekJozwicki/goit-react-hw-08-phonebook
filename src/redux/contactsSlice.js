import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  removeContact,
  updateContact,
} from './operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    token: '',
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
      .addCase(updateContact.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(updateContact.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.contacts = state.contacts.map(contact => {
          if (contact.id === payload.id) {
            return { ...contact, name: payload.name, email: payload.email };
          }
          return contact;
        });
      })
      .addCase(updateContact.rejected, (state, { payload }) => {
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
  reducers: {},
});

export default contactsSlice.reducer;
