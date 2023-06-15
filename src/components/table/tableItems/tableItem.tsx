import React, { useRef } from 'react';

import { IOperator, IPerson, ITrainer } from '../../../types';

import Person from './persons/Person';
import PersonNull from './persons/PersonNull';

interface TableAdminItemIntreface {
  data: { [key: string]: IPerson[] };
  trainers: { [key: string]: ITrainer[] };
  directors: { [key: string]: IOperator[] };
}

const TableAdminItem = ({ data, trainers, directors }: TableAdminItemIntreface) => {
  const time = Object.keys(data)[0];
  const persons = Object.entries(data[Object.keys(data)[0]]).map((el) => el[1]);
  const trainersLocal = Object.entries(trainers[Object.keys(trainers)[0]]).map((el) => el[1]);
  const directorsLocal = Object.entries(directors[Object.keys(directors)[0]]).map((el) => el[1]);
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
  console.log(trainersLocal, directorsLocal);
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
            time={time}
            directorsLocal={directorsLocal}
            trainersLocal={trainersLocal}
            len={persons.length}
          />
        ))}
        {personsMax.map((el) => {
          return <PersonNull key={el} time={time} />;
        })}
      </div>
    </div>
  );
};

export default TableAdminItem;
