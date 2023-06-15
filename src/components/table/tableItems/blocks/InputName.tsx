import React, { useRef, useState } from 'react';
import Button from './button';
import pen from '../../../../assets/images/pen.svg';
import check from '../../../../assets/images/check2.svg';

const InputName = ({
  name,
  id,
  changeNamePerson
}: {
  name: string;
  id: number;
  changeNamePerson: (name: string, id: number) => void;
}) => {
  const nameInput = useRef<HTMLInputElement | null>(null);
  const [edit, setEdit] = useState(false);
  const toggleMode = () => {
    if (edit && nameInput.current !== null) changeNamePerson(nameInput.current.value, id);
    setEdit((prevState) => !prevState);
  };
  return (
    <>
      {!edit ? <p>{name}</p> : <input ref={nameInput} type='text' />}
      <Button args={[]} icon={!edit ? pen : check} handler={toggleMode} />
    </>
  );
};

export default InputName;
