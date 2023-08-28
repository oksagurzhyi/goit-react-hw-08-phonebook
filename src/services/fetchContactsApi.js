import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact(newContact) {
  const { data } = await axios.post(
    '/contacts',

    newContact
  );
  return data;
}

export async function deleteContact(contactId) {
  const { data, config } = await axios.delete(`/contacts/${contactId}`);
  return { data, config };
}

export async function editContact(contactId) {
  const { data } = await axios.patch(`/contacts/${contactId}`);
  return data;
}
