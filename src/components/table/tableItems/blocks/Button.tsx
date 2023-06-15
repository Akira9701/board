import React from 'react';

interface ButtonInterface {
  args: any[];
  handler: (...arg: any) => void;
  icon: string;
}

const Button = ({ args, icon, handler }: ButtonInterface) => {
  return (
    <button type='button' onClick={() => handler(...args)}>
      <img src={icon} alt='icon' />
    </button>
  );
};

export default Button;
