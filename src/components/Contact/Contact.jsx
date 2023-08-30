import React from 'react';
import { Button } from '@chakra-ui/react';
import { deleteContactFetch } from '../../redux/contacts/contactsOperations';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <p
        style={{
          fontSize: '15px',
        }}
      >
        {name}: {number}
      </p>
      <Button
        size="xs"
        type="button"
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
