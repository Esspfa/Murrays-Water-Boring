import React from 'react';
import Image from 'next/image';
import ServiceWater from '../common/service-water';
import Collapse from './collapse';
import BreadCrumb from 'components/common/bread-crumb';
import Header from 'components/common/header';

const findWater = [
  {
    name: 'Will you find water on my property?',
    paragrp:
      'Yes we can. Here at D.K & E.M Murray we take pride in leaving minimal impact whilst on site whilst being environmentally friendly also.',
  },
  {
    name: 'Will you find water on my property?',
    paragrp:
      'Yes we can. Here at D.K & E.M Murray we take pride in leaving minimal impact whilst on site whilst being environmentally friendly also.',
  },
  {
    name: 'Will you find water on my property?',
    paragrp:
      'Yes we can. Here at D.K & E.M Murray we take pride in leaving minimal impact whilst on site whilst being environmentally friendly also.',
  },
  {
    name: 'Will you find water on my property?',
    paragrp:
      'Yes we can. Here at D.K & E.M Murray we take pride in leaving minimal impact whilst on site whilst being environmentally friendly also.',
  },
];

const Faqs = () => {
  return (
    <>
      <Header
        heading="Reliable Services You Can Trust"
        paragraph="Water Boring Questions Victoria"
        buttonText="Free Faqs"
        src="/img/Group116.png"
      />
      <BreadCrumb />
      <div className="flex justify-center my-14">
        <div className="lg:mx-52 max-w-7xl w-full">
          <h1 className="text-center text-darkBlue font-extrabold font-montserrat text-4xl">FAQ</h1>
          <div className="grid  grid-cols-2 gap-4">
            {findWater.map((data: any, index) => (
              <div className="w-full mt-3" key={index}>
                <Collapse item={data} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <ServiceWater
        paragraph="Improve irrigation for livestock or gardening and save money by drilling a water bore on your property. Call us today to schedule an appointment for an on-site inspection. "
        name="Get Started On Accessing Your Underground Water Today"
        text="Free onsite Inspection"
      />
    </>
  );
};

export default Faqs;
