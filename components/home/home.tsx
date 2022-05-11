import React from 'react';
import Image from 'next/image';
import Drilling from './drilling';
import Services from './services';
import Button from 'components/common/button';
import PhoneNumber from 'components/common/phone-number';
<<<<<<< HEAD
import InputType from 'components/common/inputtype';
const inputtype =[
  {
  type:"text",
  name:"name",
  placeholder:"*name"
},
{
  type:"email",
  name:"email",
  placeholder:"*Email"
},
{
  type:"cell",
  name:"phone",
  placeholder:"*+92"
},
{
  type:"text",
  name:"commit",
  placeholder:"*Comment"
},
]
=======
import ServiceWater from 'components/common/service-water';
>>>>>>> 01a9fb8c3c33efd37e0bfffc3aefea0c902b8041
const home = () => {
  return (
    <>
      <div className="main bg-darkLight">
        <div className="flex flex-wrap justify-between">
          <div className="ml-32 mt-10">
            <img src="/svg/image 4 (Traced).svg" alt="jj" className="-ml-20" />
            <div className="text-6xl  text-white font-bold ">
              <h3>
                Your Water <br />
                Boring <br />
                Experts
              </h3>
              <h3 className="mt-4 text-2xl text-white ">Water Boring in Victoria</h3>
            </div>
            <Button classes="bg-darkBlue">Schedule A Free Onsite Inspection</Button>
          </div>
          <Image src="/img/Group 1168.png" alt="truck" width="800px" height="500px" />
        </div>
        <div className="main sm:-mt-7 h-32 flex sm:flex-nowrap flex-wrap">
          <div
            className="items-center w-96 z-10"
            style={{
              background: `url(/img/blue-ribbon.png)`,
              backgroundSize: '100% 100%, cover',
              backgroundRepeat: 'no-repeat',
              // backgroundOrigin: 'content-box',
            }}
          >
            <div className="flex flex-col h-full justify-center items-end mr-8">
              <div>
                <h3 className="text-white text-lg leading-7 font-medium mb-2">Call Us Now!</h3>
                <PhoneNumber />
                <PhoneNumber />
              </div>
            </div>
          </div>
          <div className="bg-yellow-400 w-full -ml-8">
            <div className="mx-10">
              <div className="mt-4">
                <h1 className="text-black font-bold font-Montserrat ml-5">We Offer Free On-Site Inspections</h1>
              </div>
              <div className="flex items-center space-x-3 mt-1">
              {inputtype.map((data: any, index) => (
            <div key={index}>
              <InputType  item={data} />
            </div>
          ))}
                <Button>Send</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center mx-40 mt-10">
        <Image src="/img/about.png" alt="about" width="696px" height="500px" />
        <div className="ml-10 max-w-xl">
          <h1 className="text-darkBlue font-extrabold text-3xl font-montserrat">About Us</h1>
          <p className="text-Gray text-sm font-regular mt-[30px]">
            We began trading as D.K. & E.M. Murray and were founded by Des who has over 50 years of experience dating
            back to the 1960s. Murray&apos;s Water Boring is the longest-established family drilling business in the
            area, servicing most areas around Victoria. The company now has over 90 years of combined experience
            spanning over three generations from Des to his son, Gary, and two of his grandsons, Josh and Brad, who all
            work in the business with Gary holding a class 3 license which is the highest qualification.
          </p>
          <p className="text-Gray text-sm font-regular mt-[20px]">
            If you need water for your garden, stock, irrigation, test holes or mining and exploration drilling, we are
            the people to call. We are founders of the ‘no water, no charge’ offer, which we still offer on domestic and
            stock bores after our free site inspection of your property. We offer reliable service with competitive
            prices using the most modern drilling rigs in Victoria.
          </p>
          <Button classes="mt-4">Read more</Button>
        </div>
      </div>
      <Drilling />
      <ServiceWater
        name="Find Water On Your Property"
        paragraph="If you’re looking to tap into the potential your property has to offer, look no further than D. K. & E.M. Murray Water Boring. Call us today to get started with your drilling project."
      />
      <Services />
    </>
  );
};

export default home;
