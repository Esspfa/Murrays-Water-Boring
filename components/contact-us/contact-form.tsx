import Button from 'components/common/button';
import Image from 'next/image';
import React, { useState } from 'react';

const ContactForm = () => {
  const [state, setState]: [any, Function] = useState({});
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
    <div className="mx-5 flex justify-center flex-col">
      {contactForm.map((item, index) => (
        <div key={index} className="items-center relative">
          <div className="absolute h-full flex justify-center items-center px-3">
            <Image src={item.fontIcon} width={15} height={15} alt="a" className="" />
          </div>
          <input
            type={item.type}
            name={item.name}
            value={state[item.name]}
            onChange={(e) => setState((prev: Object) => ({ ...prev, [item.name]: e.target.value }))}
            placeholder={item.placeholder}
            className="bg-grayShade1 my-1 w-full rounded border border-borderColor h-8 pl-8 text-xs text-Gray"
          />
        </div>
      ))}
      <textarea
        name="textarea"
        id="textarea"
        value={state.description}
        onChange={(e) => setState((prev: Object) => ({ ...prev, description: e.target.value }))}
        cols={30}
        rows={5}
        className=" bg-grayShade1 border rounded border-borderColor  my-1 placeholder p-1"
      ></textarea>
      <button 
        className="bg-darkBlue text-white font-medium my-5 rounded-full p-2 px-5 text-sm"
        onClick={() => console.log(state)}
      >
        Send Us A Message
      </button>
      {/* <Button classes="bg-darkBlue text-white font-medium my-5" onClick={() => console.log(state)}>
        Send Us Message
      </Button> */}
    </div>
  );
};

export default ContactForm;
