import React from 'react';
import { AnyAction } from '@reduxjs/toolkit';
import Select from '../blocks/Select';
import SelectPersonal from '../blocks/SelectPersonal';
import { IOperator, IPerson, ITrainer } from '../../../../types';
import { changeDirectorName, changeTrainerName } from '../../../../store/slices/scheduleSlice';
import { toggleTrainer } from '../../../../store/slices/trainersSlice';
import { toggleOperator } from '../../../../store/slices/operatorsSlice';
import InputName from '../blocks/InputName';

interface TablePersonIntreface {
  el: IPerson;
  changeStatusLocal: (id: number, status: string) => void;
  changeDirectorLocal: (id: number) => void;
  changeNamePerson: (name: string, id: number) => void;
  changePersonal: (
    id: number,
    name: string,
    prevTrainer: string,
    toggleFunc: ({ name, time, flag }: { name: string; time: string; flag: boolean }) => AnyAction,
    statusFunc: ({ id, name, time }: { id: number; name: string; time: string }) => AnyAction
  ) => void;
  removePerson: (id: number, trainer: string, operator: string) => void;
  trainersLocal: ITrainer[];
  directorsLocal: IOperator[];
}

const Person = ({
  changeStatusLocal,
  changeDirectorLocal,
  changePersonal,
  changeNamePerson,
  removePerson,
  trainersLocal,
  directorsLocal,
  el
}: TablePersonIntreface) => {
  return (
    <>
      <div key={Date.now()} className='table_item-person' draggable='true'>
        <div className='table_item-number'>
          <p>1</p>
        </div>
        <div className='table_item-name'>
          <InputName id={el.id} name={el.name} changeNamePerson={changeNamePerson} />
        </div>
        <Select func={changeStatusLocal} id={el.id} param={el.status} />
        <div className='table_item-checkbox'>
          <input
            type='checkbox'
            checked={el.director.availability}
            className='table_item-checkbox_input'
            onChange={() => {
              changeDirectorLocal(el.id);
            }}
          />
        </div>
        <div className='table_item-remove'>
          <button
            type='button'
            onClick={() => removePerson(el.id, el.trainer.nameTrainer, el.director.nameDirector)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-x-circle'
              viewBox='0 0 16 16'
            >
              <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
              <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
            </svg>
          </button>
        </div>
      </div>
      {el.status === 'Пара' && (
        <div className='table_item-select_wrap'>
          <div className='table_item-number'>
            <p>1</p>
          </div>
          <SelectPersonal
            func={changePersonal}
            toggleFunc={toggleTrainer}
            statusFunc={changeTrainerName}
            id={el.id}
            param={el.trainer.nameTrainer}
            array={trainersLocal}
          />
        </div>
      )}
      {el.director.availability && (
        <div className='table_item-select_wrap'>
          <div className='table_item-number'>
            <p>1</p>
          </div>
          <SelectPersonal
            func={changePersonal}
            toggleFunc={toggleOperator}
            statusFunc={changeDirectorName}
            id={el.id}
            param={el.director.nameDirector}
            array={directorsLocal}
          />
        </div>
      )}
    </>
  );
};

export default Person;
