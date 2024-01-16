import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import { filtersReducer } from './filtersSlice';
import usersSlice from './usersSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    users: usersSlice,
  },
});
