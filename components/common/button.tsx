import React from 'react';

interface Props {
  children: React.ReactNode;
  classes?: string;
  onClick?: Function;
}

const Button = (props: Props) => {
  const { children, classes, onClick } = props;
  return (
    // <button className={`bg-lightBlue rounded-full p-2 px-5 text-white text-sm font-light ${classes}`} onClick={onClick}>
    <button className={`bg-lightBlue rounded-full p-2 px-5 text-white text-sm font-light ${classes}`}>
      {children}
    </button>
  );
};

export default Button;
