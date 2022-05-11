import React, { useState } from 'react';
import Image from 'next/image';
import Button from 'components/common/button';
import Findwater from './findwater'
import Servicewater from '../common/servicewater'
interface Props {
  image: string;
  header: string;
  content: string;
  image2: string;
}
const findWater = [
  {
    name: 'Will you find water on my property?',
    paragrp:
      'Yes we can. Here at D.K & E.M Murray we take pride in leaving minimal impact whilst on site whilst being environmentally friendly also.',
    location: 'Group13254.svg',
    locationq:'Vector(4).svg',
  },
  {
    name: 'Will you find water on my property?',
    paragrp:
      'Yes we can. Here at D.K & E.M Murray we take pride in leaving minimal impact whilst on site whilst being environmentally friendly also.',
    location: 'Group13254.svg',
    locationq:'Vector(4).svg',
  },
  {
    name: 'Will you find water on my property?',
    paragrp:
      'Yes we can. Here at D.K & E.M Murray we take pride in leaving minimal impact whilst on site whilst being environmentally friendly also.',
    location: 'Group13254.svg',
    locationq:'Vector(4).svg',
  },
  {
    name: 'Will you find water on my property?',
    paragrp:
      'Yes we can. Here at D.K & E.M Murray we take pride in leaving minimal impact whilst on site whilst being environmentally friendly also.',
    location: 'Group13254.svg',
    locationq:'Vector(4).svg',
  },
];
const nervicewater =[{
  name:"Get Started On Accessing Your Underground Water Today",
  pragraph:"Improve irrigation for livestock or gardening and save money by drilling a water bore on your property. Call us today to schedule an appointment for an on-site inspection. "
},
]
const Faqs = (props: Props) => {
  const [isDown, setIsDown] = useState(false);
  return (
    <div>
      <div className="flex">
        <div className="bg-darkLight w-full flex  lg:items-end">
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
      <div className="border border-gray-400">
        <div className="flex mx-40">
          <h1>Home</h1>
          <div className="ml-2">
            <Image src="/svg/Vector(4).svg" width="10px" height="10px" alt="Vector(4)" />
          </div>
          <h1 className="ml-5 text-darkLight">FAQs</h1>
        </div>
      </div>
      <div className="lg:mx-52">
        <div className="text-center text-darkBlue font-extrabold  font-Montserrat text-4xl ">
          <h1>FAQ</h1>
        </div>
       
          <div className='grid  grid-cols-2'>
          {findWater.map((data: any, index) => (
            <div className="w-full mt-3" key={index}>
              <Findwater item={data} />
            </div>
          ))}
          </div>     
      </div>
          {nervicewater.map((data: any, index) => (
            <div key={index}>
              <Servicewater item={data} />
            </div>
          ))}
          </div>
  
  );
};

export default Faqs;
