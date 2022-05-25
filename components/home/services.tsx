import React from 'react';
import Carousel from 'react-multi-carousel';
import Card from './card';

const Cards = () => {
  const services = [
    {
      image: '/img/card1.png',
      title: 'Some of Our Services Include...',
      paragraph:
        'We’re water boring specialists and provide a range of services for domestic and farm use as well as irrigation purposes.',
      endText: 'Find Out More',
    },
    {
      image: '/img/Rectangle34(2).png',
      title: 'Irrigation Holes',
      paragraph:
        'Provide your farm or property with the irrigation it requires to sustain livestock and for anything else you may need.',
      endText: 'More Info',
    },
    {
      image: '/img/Rectangle34(1).png',
      title: 'Exploration Drilling',
      paragraph:
        'We specialise in mineral exploration boring for various businesses. You can trust our reliable team to get the job done right.',
      endText: 'Learn More',
    },
  ];
  const responsive = {
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="mt-10 mx-5">
      <h1 className="text-center font-extrabold text-darkBlue text-46px font-montserrat">
        Some Of Our Services Include..
      </h1>
      <div className="xs:grid hidden md:grid-cols-3 xs:grid-cols-2 grid-cols-1 max-w-7xl mx-auto my-5 gap-5">
        {services.map((item, index) => (
          <Card key={index} image={item.image} title={item.title} paragraphs={item.paragraph} endText={item.endText} />
        ))}
      </div>
      <div className="xs:hidden block my-5">
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          showDots={true}
          containerClass="pb-6"
          dotListClass="carousel-dots"
        >
          {services.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              title={item.title}
              paragraphs={item.paragraph}
              endText={item.endText}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Cards;
