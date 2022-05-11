import React from 'react';
interface Props {
  item: any;
}
const InputType = (props: Props) => {
  const { item } = props;
  return (
    <input
      type={item.type}
      name={item.name}
      placeholder={item.placeholder}
      className="rounded-full font-thin w-52 h-10  px-5 text-Gray"
    />
  );
};

export default InputType;
