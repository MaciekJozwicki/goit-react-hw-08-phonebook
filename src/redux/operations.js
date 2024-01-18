import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://connections-api.herokuapp.com';

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (token, thunkAPI) => {
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
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`${url}/contacts`, {
        name: data.name,
        number: data.number,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (data, thunkAPI) => {
    try {
      const response = await axios.patch(`${url}/contacts/${data.id}`, {
        name: data.name,
        number: data.number,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (data, thunkAPI) => {
    try {
      const response = await axios.delete(`${url}/contacts/${data.id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'users/loginUser',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`${url}/users/login`, {
        email: data.email,
        password: data.password,
      });
      setAuthToken(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  'contacts/registerUser',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`${url}/users/signup`, data);
      setAuthToken(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'users/logoutUser',
  async (token, thunkAPI) => {
    try {
      await axios.post(`${url}/users/logout`, {
        token: token,
      });
      clearAuthToken();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const currentToken = state.users.token;

    if (!currentToken) {
      return thunkAPI.rejectWithValue('Auth error');
    }

    try {
      const response = await axios.get(`${url}/users/current`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
