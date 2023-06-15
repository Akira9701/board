import React, { useRef, useState } from 'react';

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
  return (
    <>
      {!edit ? <p>{name}</p> : <input ref={nameInput} type='text' />}
      <button
        type='button'
        onClick={() => {
          if (edit && nameInput.current !== null) changeNamePerson(nameInput.current.value, id);
          setEdit((prevState) => !prevState);
        }}
      >
        {!edit ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-pen'
            viewBox='0 0 16 16'
          >
            <path d='m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z' />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-check2'
            viewBox='0 0 16 16'
          >
            <path d='M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z' />
          </svg>
        )}
      </button>
    </>
  );
};

export default InputName;
