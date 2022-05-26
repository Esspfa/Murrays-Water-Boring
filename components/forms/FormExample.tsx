import React, { EventHandler, useEffect, useState } from "react";

const FormExample = () => {

  const [name, setName] = useState('');

  const [errors, setErrors] = useState({
    name: false
  });

  //status of the form, goes from 'waiting' to 'submitted' to 'sending' to 'sent'
  const [formStatus, setFormStatus] = useState('waiting');

  useEffect(() => {
    setErrors({
      name: name === ''
    })
  }, [name]);

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormStatus('submitted');

    //validation on submit, this checks that all the fields are valid
    const errorsList = [];
    for (const [key, value] of Object.entries(errors)) {
      value && errorsList.push(key);
    };
    if (errorsList.length > 0) {
      console.log('errors, not submitted');
      return;
    };
    
    //this is what you're doing instead of actually submitting the data
    setFormStatus('sending');
    const body = {
      name
    };
    console.log(body);
    
    setFormStatus('sent');
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='Name'
        />
        {formStatus === 'submitted' && errors.name && <p className="text-red-500">Enter a name</p>}
      </div>
      <button
        type='submit'
      >
        Submit
      </button>
    </form>
  )
};

export default FormExample;