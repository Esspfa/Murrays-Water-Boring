import Image from 'next/image';
import React from 'react';

interface Props {
  title: string;
  paragraphs: string;
  endText?: string;
  image: string;
}

const Card = (props: Props) => {
  const { title, paragraphs, endText, image } = props;
  return (
    <div>
      <Image src={image} width="454px" height="280px" alt="truck" className="-z-10" />
      <div className="rounded-none bg-white px-4 py-3 w-11/12 ml-auto -mt-5 z-10 card-border">
        <h1 className="font-bold font-montserrat">{title}</h1>
        <p className="text-base text-Gray font-normal">{paragraphs}</p>
        <div className="mt-2 text-darkLight font-medium">
          {endText}
          <Image src="/svg/arrow.svg" width="20px" height="10px" alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Card;
