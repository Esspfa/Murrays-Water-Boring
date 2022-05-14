import React from 'react';
import Image from 'next/image';
import BreadCrumb from 'components/common/bread-crumb';
import Header from 'components/common/header';
import PhoneNumber from 'components/common/phone-number';
import ServiceWater from 'components/common/service-water';
import Button from 'components/common/button';

const contact = () => {
  const contactForm = [
    {
      type: 'text',
      name: 'name',
      placeholder: 'Name',
      fontIcon: '/svg/user.svg',
    },
    {
      type: 'email',
      name: 'email',
      placeholder: 'Email address',
      fontIcon: '/svg/sms.svg',
    },
    {
      type: 'number',
      name: 'phone',
      placeholder: 'Phone Number',
      fontIcon: '/svg/call-calling.svg',
    },
  ];
  return (
    <div>
      <div>
        <Header
          heading="EXPERTISE YOU CAN TRUST"
          paragraph="Contact D.K. & E.M. Murray Water Boring in Victoria"
          clickme="Contact Us Today"
          src="/img/Rectangle31(2).png"
        />
      </div>
      <BreadCrumb />
      <div className="container mx-auto mt-10">
        <div className="text-center">
          <h1 className="font-montserrat font-extrabold text-darkBlue text-2xl">Professional Drilling Services</h1>
          <p className="mt-5 text-Gray font-normal">
            We have decades of experience with drilling water bores. Provide your property with the irrigation it needs
            by giving us a call today.
          </p>
        </div>
        <div className="lg:mx-20 sm:mx">
          <div className="grid lg:grid-cols-3 shadow-lg  px-5 lg:h-40 justify-center items-center">
            <div>
              <h1 className="font-montserrat font-bold ">Find Water</h1>
              <p className="text-Gray font-normal mt-2">
                We have decades of experience with drilling water bores. Provide your property with the irrigation it
                needs by giving us a call today.
              </p>
            </div>
            <div className="leading-5 justify-center ">
              <h1 className="font-montserrat font-bold">Location</h1>
              <div className="mt-3">
                <PhoneNumber
                  classes1="11 Hyde Park Rd, Creswick Victoria, 3363"
                  src1="/svg/Group1214.svg"
                  alt1="Group1214.svg"
                />
                <PhoneNumber classes1=" Mon - Sun 6:00 am - 9:00 pm" src1="/svg/time.svg" alt1="time" />
              </div>
            </div>
            <div className="leading-5 justify-center ">
              <h1 className="font-montserrat font-bold">Location</h1>
              <div className="mt-3">
                <PhoneNumber classes1="03 5345 2175" src1="/svg/phonecall.svg" alt1="phonecall" />
                <PhoneNumber classes1="0428 518 159" src1="/svg/phonecall.svg" alt1="phonecall" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div>
        <div className="mt-4 relative">
          <Image src="/img/map.png" alt="map" width="1400" height="600" />
          <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <div className="px-5  justify-center items-center bg-white border border-b-lightBlue border-b-4 w-full" >
              <form action="">
                <h1 className="text-center font-bold text-lg my-2">
                  Contact Us <br />
                  For A Free Quote
                </h1>
                <div className="mx-5 flex justify-center flex-col">
                {contactForm.map((item,index) => (
                  <div key={index} className="items-center">
                    <div className='absolute  mb-3'>
                    <Image src={item.fontIcon} width={20} height={20} alt="a" className=""/>
                    </div>
                    <input
                      type={item.type}
                      name={item.name}
                      placeholder={item.placeholder}
                      className=" bg-[#FAFAFA]  my-1 w-full rounded border-borderColor h-8"
                    />
                    </div>
                  ))}
                  <textarea
                    name="text"
                    id="s"
                    cols={30}
                    rows={5}
                    className=" bg-[#FAFAFA] border rounded border-borderColor  my-1 placeholder"
                  ></textarea>
                  <Button classes="bg-darkBlue text-white font-medium my-5">Send Us Message</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <ServiceWater
          name="Find Water On Your Property"
          paragraph="If you’re looking to tap into the potential your property has to offer, look no further than D. K. & E.M. Murray Water Boring. Call us today to get started with your drilling project."
          text="Call Us Today"
        />
      </div>
    </div>
  );
};

export default contact;
