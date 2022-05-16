import Image from 'next/image';
import React from 'react';

interface Props {
  name?: string;
  image?: string;
  nameClasses?: string;
  classes?: string;
}

const NameImage = (props: Props) => {
  const { name, image, nameClasses, classes } = props;
  return (
    <div className={`flex ${classes}`}>
      <div className="rounded-full flex justify-center bg-lightBlue items-center w-6 h-6 min-h-6 min-w-6 max-h-6 max-w-6">
        <Image src={image || '/svg/phonecall.svg'} alt="phone-call" width={12} height={12} />
      </div>
      <p className={`ml-3 text-white ${nameClasses} text-sm`}>{name || '03 5345 2175'}</p>
    </div>
  );
};

export default NameImage;
