import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://65a45a5352f07a8b4a3d5cc3.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${url}/contacts`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, _, thunkAPI) => {
    try {
      const response = await axios.post(`${url}/contacts`, data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (data, _, thunkAPI) => {
    try {
      const response = await axios.delete(`${url}/contacts/${data}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
