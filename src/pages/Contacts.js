import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllContacts } from 'store/operations';

const Contacts = () => {
  return (
    <>
      <h2>Contacts</h2>
      <ContactForm />

      <h2> Contacts:</h2>
      <Filter />

      <ContactList />
    </>
  );
};
export default Contacts;
