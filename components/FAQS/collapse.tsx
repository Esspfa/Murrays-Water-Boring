import React, { useState } from 'react';
interface Props {
  item: any;
}
const Collapse = (props: Props) => {
  const { item } = props;
  const [isDown, setIsDown] = useState(false);
  return (
    <>
      <div
        className={`border border-borderColor flex justify-between items-center cursor-pointer p-2 rounded-md ${
          isDown && 'bg-darkBlue text-white rounded-b-none'
        }`}
        onClick={() => {
          setIsDown(!isDown);
        }}
      >
        <h1>{item.name}</h1>
        <img
          src={`/svg/${isDown ? 'Group13254.svg' : 'Vector(4).svg'}`}
          alt="Vector(4)"
          className={`w-4 h-3 rotate-90 flex items-end content-end ${isDown && '-rotate-0 h-2'} `}
        />
      </div>
      <div className={`drop-down  ${isDown && 'open-faq p-3 '} border border-borderColor rounded-b-md m-0`}>
        <p className={`text-Gray text-sm`}>{item.paragrp}</p>
      </div>
    </>
  );
};

export default Collapse;
