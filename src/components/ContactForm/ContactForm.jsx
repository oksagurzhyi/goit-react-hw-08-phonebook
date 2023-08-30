import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Input } from '@chakra-ui/react';
import InputMask from 'react-input-mask';
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
        <InputMask
          className={css.inputContact}
          mask="+38(099)999-99-99"
          maskChar="_"
          placeholder="+38(0__)___-__-__"
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button type="submit" colorScheme="blue" borderRadius="5px" w="100%">
        Add contact
      </Button>
    </form>
  );
}
