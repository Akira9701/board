import React from 'react';
import { AnyAction } from '@reduxjs/toolkit';
import { IOperator, ITrainer } from '../../../../types';

interface SelectPersonalInterface {
  func: (
    id: number,
    status: string,
    prevTrainer: string,
    toggleFunc: ({ name, time, flag }: { name: string; time: string; flag: boolean }) => AnyAction,
    statusFunc: ({ id, name, time }: { id: number; name: string; time: string }) => AnyAction
  ) => void;
  id: number;
  param: string;
  array: ITrainer[] | IOperator[];
  toggleFunc: ({ name, time, flag }: { name: string; time: string; flag: boolean }) => AnyAction;
  statusFunc: ({ id, name, time }: { id: number; name: string; time: string }) => AnyAction;
}

const SelectTrainer = ({
  func,
  id,
  param,
  array,
  toggleFunc,
  statusFunc
}: SelectPersonalInterface) => {
  return (
    <select
      className='minimal'
      value={param}
      name=''
      id=''
      onChange={(e) => {
        func(id, e.target.value, param, toggleFunc, statusFunc);
      }}
    >
      <option value='-'>-</option>
      {array.map((el, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <option disabled={el.ability === false} value={el.name} key={index}>
          {el.name}
        </option>
      ))}
    </select>
  );
};

export default SelectTrainer;
