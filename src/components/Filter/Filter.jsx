import React from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '@chakra-ui/react';
import { filterChange } from 'redux/contacts/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label className={css.labelFilter}>
      Find contact by name:
      <Input
        size="md"
        className={css.inputFilter}
        type="text"
        onChange={e => {
          dispatch(filterChange(e.currentTarget.value));
        }}
      />
    </label>
  );
};
