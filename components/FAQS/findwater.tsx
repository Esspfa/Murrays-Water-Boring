import React, { useState } from 'react';
interface Props {
  item: any;
}
const Findwater = (props: Props) => {
  const { item } = props;
  const [isDown, setIsDown] = useState(false);
  return (
    <div>
      <div className="">
        <div
          className={`border border-gray-400 flex justify-between items-center  cursor-pointer   ${
            isDown && 'bg-darkBlue text-white'
          }`}
          onClick={() => {
            setIsDown(!isDown);
          }}
        >
          <h1>{item.name}</h1>
          <img
            src={`/svg/${isDown ? item.location : item.locationq}`}
            alt="Vector(4)"
            className={`w-4 h-3 rotate-90 flex items-end content-end ${isDown && '-rotate-0 h-2'} `}
          />
        </div>
        <div className={`drop-down ${isDown && 'open flex justify-between'} `}>
          {isDown && <p className="border border-gray-400">{item.paragrp}</p>}
        </div>
      </div>
    </div>
  );
};

export default Findwater;
