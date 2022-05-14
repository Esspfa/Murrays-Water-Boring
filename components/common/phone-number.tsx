import Image from 'next/image';
import React from 'react';
interface Props {
  name?: string;
  name2?: string;
  src1?: string;
  alt1?: string;
  src2?: string;
  alt2?: string;
  classes?: string;
  classes1?: string;
}
const PhoneNumber = (props: Props) => {
  const { src1, src2, name, name2, alt1, alt2, classes, classes1 } = props;
  return (
    <div>
      <div className="flex">
        {src1 && (
          <div className="rounded-full flex justify-center bg-lightBlue items-center w-5 h-5">
            <Image src={src1} alt={alt1} width={12} height={12} />
          </div>
        )}
        <p className="ml-3  text-white">{name}</p>
        <p className=" flex justify-center">{classes1}</p>
      </div>
      <div className="flex">
        {src2 && (
          <div className="rounded-full flex justify-center bg-lightBlue items-center w-5 h-5">
            <Image src={src2} alt={alt2} width={12} height={12} />
          </div>
        )}
        <p className="ml-3 text-white ">{name2}</p>
        <p >{classes}</p>
      </div>
    </div>
  );
};

export default PhoneNumber;
