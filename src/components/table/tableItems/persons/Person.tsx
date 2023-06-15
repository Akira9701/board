import React from 'react';
import { AnyAction } from '@reduxjs/toolkit';
import Select from '../blocks/Select';
import SelectPersonal from '../blocks/SelectPersonal';
import { IOperator, IPerson, ITrainer } from '../../../../types';
import {
  changeDirectorName,
  changeDirectorStatus,
  changeTrainerName
} from '../../../../store/slices/scheduleSlice';
import { toggleTrainer } from '../../../../store/slices/trainersSlice';
import { toggleOperator } from '../../../../store/slices/operatorsSlice';
import InputName from '../blocks/InputName';
import Button from '../blocks/button';
import close from '../../../../assets/images/x-circle.svg';

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
        <Select
          func={changeStatusLocal}
          id={el.id}
          param={el.status}
          funcDisable={changePersonal}
          trainerName={el.trainer.nameTrainer}
        />
        <div className='table_item-checkbox'>
          <input
            type='checkbox'
            checked={el.director.availability}
            className='table_item-checkbox_input'
            onChange={(e) => {
              if (!e.target.checked) {
                changePersonal(
                  el.id,
                  '-',
                  el.director.nameDirector,
                  toggleOperator,
                  changeDirectorStatus
                );
              } else {
                changeDirectorLocal(el.id);
              }
            }}
          />
        </div>
        <div className='table_item-remove'>
          <Button
            handler={removePerson}
            args={[el.id, el.trainer.nameTrainer, el.director.nameDirector]}
            icon={close}
          />
        </div>
      </div>
      {el.status === 'Пара' && (
        <SelectPersonal
          func={changePersonal}
          toggleFunc={toggleTrainer}
          statusFunc={changeTrainerName}
          id={el.id}
          param={el.trainer.nameTrainer}
          array={trainersLocal}
        />
      )}
      {el.director.availability && (
        <SelectPersonal
          func={changePersonal}
          toggleFunc={toggleOperator}
          statusFunc={changeDirectorName}
          id={el.id}
          param={el.director.nameDirector}
          array={directorsLocal}
        />
      )}
    </>
  );
};

export default Person;
