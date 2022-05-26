import Button from 'components/common/button';
import InputType from 'components/common/input-type';
import React, { useState } from 'react';
const inputType = [
  {
    type: 'text',
    name: 'name',
    placeholder: '*name',
  },
  {
    type: 'email',
    name: 'email',
    placeholder: '*Email',
  },
  {
    type: 'cell',
    name: 'phone',
    placeholder: '*+92',
  },
  {
    type: 'text',
    name: 'commit',
    placeholder: '*Comment',
  },
];
interface formInputs {
  name: String;
  email: String;
  phone: String;
  commit: String;
}
const HomeForm = () => {
  const [state, setState]: [any, Function] = useState({ name: '', email: '', phone: '', commit: '' });
  return (
    <>
      <div className="flex flex-wrap items-center mt-1">
        {inputType.map((data, index) => (
          <input
            key={index}
            type={data.type}
            value={state[data.name]}
            onChange={(e) => setState((prev: Object) => ({ ...prev, [data.name]: e.target.value }))}
            name={data.name}
            placeholder={data.placeholder}
            className="rounded-full font-thin w-52 h-10  px-5 text-Gray xs:mr-2 mb-2"
          />
        ))}
      </div>
      <Button onClick={() => console.log(state)}>Send</Button>
    </>
  );
};

export default HomeForm;
