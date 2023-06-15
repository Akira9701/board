import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import plus from '../../../../assets/images/plus-circle.svg';
import Button from '../blocks/button';
import { addUser } from '../../../../store/slices/scheduleSlice';

interface PersonNullInterface {
  time: string;
}

const PersonNull = ({ time }: PersonNullInterface) => {
  const dispatch = useDispatch();
  const addPerson = (name: string) => {
    dispatch(addUser({ name, time }));
  };
  const state = useRef('');
  return (
    <div key={Date.now()} className='table_item-person table_item-person_null'>
      <div className='table_item-number'>
        <p>1</p>
      </div>
      <div className='table_item-name'>
        <input
          type='text'
          onChange={(e) => {
            state.current = e.target.value;
          }}
        />
      </div>
      <button
        type='button'
        className='table_item-add'
        onClick={() => {
          if (state.current !== '') {
            addPerson(state.current);
          }
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='bi bi-plus-circle'
          viewBox='0 0 16 16'
        >
          <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
          <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
        </svg>
      </button>
    </div>
  );
};

export default PersonNull;
