import React from 'react';
import Button from 'components/common/button';
import Image from 'next/image';
import ServiceWater from 'components/common/service-water';
import AboutPart from 'components/common/about-part';
import BreadCrumb from 'components/common/bread-crumb';
import Header from 'components/common/header';
const About = () => {
  return (
    <>
      <Header
        heading="There For You When You Need Us"
        paragraph="D.K. & E.M. Murray Water Boring Gallery in Victoria"
        buttonText="Find Out More"
        src="/img/Rectangle11.png"
      />
      <BreadCrumb />
      <AboutPart />
      <ServiceWater
        name="Get More Information"
        paragraph="If you have questions about our boring processes or want to find out more about drilling on your property, just give us a call. A member of our team would be happy to schedule an on-site inspection."
        text="Schedule and Inspection"
      />
    </>
  );
};

export default About;
