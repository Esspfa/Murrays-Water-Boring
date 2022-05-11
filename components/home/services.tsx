import React from 'react';
import Image from 'next/image';
import Card from './card';

const Cards = () => {
  return (
    <div className="mt-10">
      <h1 className="text-center font-extrabold text-darkBlue text-3xl ">Some Of Our Services Include..</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-1  lg:mx-40 mt-5 sm:gap-5 `sm:mx-10">
        <Card
          title="Some of Our Services Include..."
          paragraphs="We’re water boring specialists and provide a range of services for domestic and farm use as well as irrigation purposes."
        />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Cards;
