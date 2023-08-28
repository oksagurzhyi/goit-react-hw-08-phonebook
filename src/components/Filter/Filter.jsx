import React from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '@chakra-ui/react';
import { filterChange } from 'store/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label className={css.labelFilter}>
      Find contacts by name:
      <Input
        className={css.inputFilter}
        type="text"
        onChange={e => {
          dispatch(filterChange(e.currentTarget.value));
        }}
      />
    </label>
  );
};
