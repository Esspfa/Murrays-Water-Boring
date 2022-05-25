import React from 'react';
import Image from 'next/image';
import ServiceWater from '../common/service-water';
import Collapse from './collapse';
import BreadCrumb from 'components/common/bread-crumb';
import Header from 'components/common/header';

const findWater = [
  {
    name: 'Will you find water on my property?',
    paragraph: `A general rule of thumb is that there is normally always water under your property. The quantity of water and quality of water does 
    vary across each property. With over 100 years of experience, Murray Drilling has an in-depth knowledge and understanding of the areas we cover. 
    With access to the latest technology, we are able to provide you with the best information regarding finding water on your property.`,
  },
  {
    name: 'Do I require a permit?',
    paragraph: `Yes, all bores require a permit. Head here to apply for yours today. Permit - <a href="https://mywater.waterregister.vic.gov.au/" target="_blank">Click Here</a>`,
  },
  {
    name: 'Are there regular ongoing fees attached to getting a water bore?',
    paragraph: 'No ongoing fees with Stock or Domestic are incurred. There is only a one-off upfront fee required.',
  },
  {
    name: 'Are water bores only available in certain areas of Victoria?',
    paragraph:
      'Water Bores are available all over Victoria no matter if you are metro- or regional-based. Victorians are entitled to a stock or domestic bore.',
  },
  {
    name: 'How do we determine the best location for a bore?',
    paragraph:
      'Based on the geology of the land and our combined 100 years of experience we are able to determine the most convenient location to achieve the best outcome for you the client.',
  },
  {
    name: 'Can you access my site during the wetter months?',
    paragraph:
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
          <div className="grid grid-cols-2 gap-4 sm:mx-0 mx-3">
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
