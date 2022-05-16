import React from 'react';
import Image from 'next/image';
import Card from './card';

const Cards = () => {
  return (
    <div className="mt-10 mx-5">
      <h1 className="text-center font-extrabold text-darkBlue text-4xl">Some Of Our Services Include..</h1>
      <div className="grid md:grid-cols-3 xs:grid-cols-2 grid-cols-1 max-w-7xl mx-auto my-5 gap-5">
        <Card
          image="/img/card1.png"
          title="Some of Our Services Include..."
          paragraphs="We’re water boring specialists and provide a range of services for domestic and farm use as well as irrigation purposes."
          endText="Find Out More"
        />
        <Card
          image="/img/Rectangle34(2).png"
          title="Irrigation Holes"
          paragraphs="Provide your farm or property with the irrigation it requires to sustain livestock and for anything else you may need."
          endText="More Info"
        />
        <Card
          image="/img/Rectangle34(1).png"
          title="Exploration Drilling"
          paragraphs="We specialise in mineral exploration boring for various businesses. You can trust our reliable team to get the job done right."
          endText="Learn More"
        />
      </div>
    </div>
  );
};

export default Cards;
