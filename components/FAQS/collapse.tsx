import Image from 'next/image';
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
        <div className={`rotate-90 ${isDown && '-rotate-0'} `}>
          <Image
            src={`/svg/${isDown ? 'Group13254.svg' : 'Vector(4).svg'}`}
            alt="Vector(4)"
            width={12}
            height={12}
            className={`flex items-end content-end`}
          />
        </div>
      </div>
      <div className={`drop-down  ${isDown && 'open-faq p-3 '} border border-borderColor rounded-b-md m-0`}>
        <p className={`text-Gray text-sm`}>{item.paragrp}</p>
      </div>
    </>
  );
};

export default Collapse;
