import React from 'react';
import { Button } from '@chakra-ui/react';
import { deleteContactFetch } from '../../redux/contacts/contactsOperations';
import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>
        {name}: {number}
      </p>
      <Button
        type="button"
        className={css.btnDelete}
        onClick={() => dispatch(deleteContactFetch(id))}
      >
        Delete
      </Button>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
