import { useState } from  'react';


function InputExample() {

  const  [name, setName] = useState("");
  const  [surname, setSurname] = useState("");

  const onChangeName = (event) => setName(event.target.value);
  const onChangeSurname = (event) => setSurname(event.target.value);


  return (
    <div>
        Enter a name <br/>
     
    <input value={name} onChange={onChangeName} /> 
    <br/>
    <br/>
    <input value={surname} onChange={onChangeSurname} /> 
    <br/>
    {name} {surname}
    

    </div>
    );
}

export default InputExample