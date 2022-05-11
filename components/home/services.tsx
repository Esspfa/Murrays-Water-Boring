import React from 'react';
import Image from 'next/image';
import Card from './card';

const Cards = () => {
  return (
    <div className="mt-10 mx-5">
      <h1 className="text-center font-extrabold text-darkBlue text-3xl ">Some Of Our Services Include..</h1>
      <div className="grid md:grid-cols-3 xs:grid-cols-2 grid-cols-1 lg:mx-40 mt-5 gap-5">
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
