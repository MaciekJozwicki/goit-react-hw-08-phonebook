import { createSelector } from '@reduxjs/toolkit';

export const contacts = state => state.contacts.contacts;
export const filter = state => state.contacts.filter;
export const selectFilteredContacts = state => state.filters;
export const selectContacts = state => state.contacts.contacts;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilteredContacts],
  (contacts, filteredContacts) => {
    if (filteredContacts === '') {
      return contacts;
    } else {
      console.log('contacts', contacts);
      return contacts.filter(
        contact =>
          contact.name.toLowerCase().includes(filteredContacts.filter) ?? []
      );
    }
  }
);
