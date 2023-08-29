import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');

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
      console.log(contact.data);

      return contact.data;
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
      console.log(data.data.id);
      return data.data.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
