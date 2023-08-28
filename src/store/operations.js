import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteContact, addContact } from '../services/fetchContactsApi';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, thunkAPI) => {
    try {
      const { data, config } = await axios.get('/contacts');
      setAuthHeader(config.headers.Authorization);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContactFetch = createAsyncThunk(
  'contacts/addContactFetch',
  async ({ name, number }, thunkAPI) => {
    console.log({ name, number });
    try {
      const contact = await axios.post('/contacts', { name, number });
      setAuthHeader(contact.config.headers.Authorization);
      console.log(contact);

      return contact;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContactFetch = createAsyncThunk(
  'contacts/deleteContactFetch',
  async (contactId, thunkAPI) => {
    try {
      const data = await axios.delete(`/contacts/${contactId}`);
      setAuthHeader(data.config.headers.Authorization);
      console.log(data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
