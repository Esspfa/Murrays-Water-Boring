import { useState } from "react";

const FormExample = () => {
  const [name, setName] = useState('');


  return (
    <form>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </form>
  )
};

export default FormExample;