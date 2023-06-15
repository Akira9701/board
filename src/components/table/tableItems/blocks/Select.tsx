import React from 'react';
import { AnyAction } from '@reduxjs/toolkit';
import { toggleTrainer } from '../../../../store/slices/trainersSlice';
import { changeTrainerStatus } from '../../../../store/slices/scheduleSlice';

interface SelectInterface {
  func: (id: number, status: string) => void;
  funcDisable: (
    id: number,
    name: string,

    prevTrainer: string,
    toggleFunc: ({ name, time, flag }: { name: string; time: string; flag: boolean }) => AnyAction,
    statusFunc: ({ id, name, time }: { id: number; name: string; time: string }) => AnyAction
  ) => void;
  id: number;
  param: string;
  trainerName: string;
}

const Select = ({ func, id, param, trainerName, funcDisable }: SelectInterface) => {
  return (
    <select
      className='minimal'
      value={param}
      name=''
      id=''
      onChange={(e) => {
        if (e.target.value === 'Спортсмен') {
          console.log(trainerName);
          funcDisable(id, '-', trainerName, toggleTrainer, changeTrainerStatus);
        }
        func(id, e.target.value);
      }}
    >
      <option value='Пара'>Пара</option>
      <option value='Спортсмен'>Спортсмен</option>
    </select>
  );
};

export default Select;
