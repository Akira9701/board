import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { AnyAction } from '@reduxjs/toolkit';
import {
  addUser,
  changeDirectorStatus,
  changePersonName,
  changeTrainerStatus,
  removeUser
} from '../../../store/slices/scheduleSlice';
import { IOperator, IPerson, ITrainer } from '../../../types';
import { toggleOperator } from '../../../store/slices/operatorsSlice';
import { toggleTrainer } from '../../../store/slices/trainersSlice';
import Person from './persons/Person';
import PersonNull from './persons/PersonNull';

interface TableAdminItemIntreface {
  data: { [key: string]: IPerson[] };
  trainers: { [key: string]: ITrainer[] };
  directors: { [key: string]: IOperator[] };
}

const TableAdminItem = ({ data, trainers, directors }: TableAdminItemIntreface) => {
  const time = Object.keys(data)[0];
  const persons = data[Object.keys(data)[0]];
  const trainersLocal = trainers[Object.keys(trainers)[0]];
  const directorsLocal = directors[Object.keys(directors)[0]];
  const personsMax = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const dataContainer = useRef<HTMLDivElement | null>(null);
  let personVal = 0;

  persons.forEach((el) => {
    personVal += 1;
    if (el.director.availability) {
      personVal += 1;
    }
    if (el.trainer.availability) {
      personVal += 1;
    }
  });

  personsMax.splice(0, personVal);

  const dispatch = useDispatch();

  const changeStatusLocal = (id: number, status: string) => {
    dispatch(changeTrainerStatus({ id, status, time }));
  };

  const changeDirectorLocal = (id: number) => {
    dispatch(changeDirectorStatus({ id, time }));
  };

  const changePersonal = (
    id: number,
    name: string,

    prevTrainer: string,
    toggleFunc: ({ name, time, flag }: { name: string; time: string; flag: boolean }) => AnyAction,
    statusFunc: ({ id, name, time }: { id: number; name: string; time: string }) => AnyAction
  ) => {
    console.log(name);
    if (name === '-') {
      dispatch(toggleFunc({ name: prevTrainer, time, flag: true }));
    } else if (prevTrainer === '-') {
      dispatch(toggleFunc({ name, time, flag: false }));
    } else {
      dispatch(toggleFunc({ name: prevTrainer, time, flag: true }));

      dispatch(toggleFunc({ name, time, flag: false }));
    }
    dispatch(statusFunc({ id, name, time }));
  };

  const addPerson = (name: string) => {
    dispatch(addUser({ name, time }));
  };
  const changeNamePerson = (name: string, id: number) => {
    dispatch(changePersonName({ name, id, time }));
  };

  const removePerson = (id: number, trainer: string, operator: string) => {
    dispatch(toggleOperator({ name: operator, time, flag: true }));
    dispatch(toggleTrainer({ name: trainer, time, flag: true }));
    dispatch(removeUser({ id, time }));
  };

  return (
    <div className='table_item-wrap'>
      <div className='table_item-time'>
        <p>{time}</p>
      </div>

      <div className='table_item-data' ref={dataContainer}>
        {persons.map((el) => (
          <Person
            key={el.id}
            el={el}
            changeDirectorLocal={changeDirectorLocal}
            changePersonal={changePersonal}
            changeStatusLocal={changeStatusLocal}
            directorsLocal={directorsLocal}
            trainersLocal={trainersLocal}
            changeNamePerson={changeNamePerson}
            removePerson={removePerson}
          />
        ))}
        {personsMax.map((el) => {
          return <PersonNull key={el} addPerson={addPerson} />;
        })}
      </div>
    </div>
  );
};

export default TableAdminItem;
