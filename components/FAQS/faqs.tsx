import React from 'react';
import Image from 'next/image';
import ServiceWater from '../common/service-water';
import Collapse from './collapse';
import BreadCrumb from 'components/common/bread-crumb';

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
      <div className="flex">
        <div className="bg-lightBlue w-full flex  lg:items-end">
          <div className="py-32">
            <div className="">
              <h1 className="text-white text-4xl font-bold ">Reliable Services You Can Trust</h1>
              <h1 className="mt-3 text-white text-lg">Water Boring Questions Victoria</h1>
              <button className="mt-3 rounded-full bg-darkBlue w-1/3 h-10 text-white">Free Faqs</button>
            </div>
          </div>
          <div className="flex">
            <img src="/img/Group116.png" alt="s" className="w-full" />
          </div>
        </div>
      </div>
      <BreadCrumb />
      <div className="flex justify-center my-14">
        <div className="lg:mx-52 max-w-5xl w-full">
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
