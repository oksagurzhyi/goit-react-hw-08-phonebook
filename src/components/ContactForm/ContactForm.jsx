import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input } from '@chakra-ui/react';
import css from './ContactForm.module.css';
import { contactsSelector } from 'redux/contacts/selectors';
import { addContactFetch } from 'redux/contacts/contactsOperations';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(contactsSelector);

  const dispatch = useDispatch();

  const handleChange = event => {
    const input = event.currentTarget;
    switch (input.name) {
      case 'name':
        setName(input.value);

        break;
      case 'number':
        setNumber(input.value);

        break;

      default:
        break;
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    const isContactInPhonebook = contacts.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isContactInPhonebook) {
      return alert('This contact is already exist in your phonebook');
    }

    dispatch(addContactFetch({ name, number }));

    setName('');
    setNumber('');
  };

  return (
    <form className={css.formContact} onSubmit={onSubmit}>
      <label className={css.labelContact}>
        Name
        <Input
          className={css.inputContact}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.labelContact}>
        Number
        <Input
          className={css.inputContact}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button type="submit" className={css.btnSubmit}>
        Add contact
      </Button>
    </form>
  );
}
