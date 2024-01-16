import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://connections-api.herokuapp.com';

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWE2ZTI2Yzk5M2M1YjAwMTRkYTc2ZmIiLCJpYXQiOjE3MDU0MzgwNTh9.q6ReNeCYBlSKWCs76tScM92VScovh1sUdPxZUzNnufk`;
};

const clearAuthToken = () => {
  // to dla logout
  axios.defaults.headers.common.Authorization = '';
};

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWE2ZTI2Yzk5M2M1YjAwMTRkYTc2ZmIiLCJpYXQiOjE3MDU0MzgzMjV9.PRYaic2iHDmBOG5JXQWp647BHVlFPWnHNyJckgLyu0w`;

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${url}/contacts`, {
        headers: {
          Authorization: token,
        },
      });
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

export const loginUser = createAsyncThunk(
  'users/loginUser',
  async (data, _, thunkAPI) => {
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
  async (data, _, thunkAPI) => {
    try {
      const response = await axios.post(`${url}/users`, data);
      setAuthToken(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
