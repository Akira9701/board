import React from 'react';

interface SelectInterface {
  func: (id: number, status: string) => void;
  id: number;
  param: string;
}

const Select = ({ func, id, param }: SelectInterface) => {
  return (
    <select
      className='minimal'
      value={param}
      name=''
      id=''
      onChange={(e) => {
        func(id, e.target.value);
      }}
    >
      <option value='Пара'>Пара</option>
      <option value='Спортсмен'>Спортсмен</option>
    </select>
  );
};

export default Select;
