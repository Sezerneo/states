import { useState } from 'react';

import './App.css';

function App() {

  const  [name, setName] = useState("Mehmet");
  const  [age, setAge] = useState("320");
  const  [friends, setFriends] = useState(["Ahmet", "Murat"]);
  const  [adress, setAdress] = useState({ title:"istanbul", zip: 41400});



  return (
    <div className="App">
     
    <h1>Merhaba {name}!</h1>
    <button onClick={() => setName("Ahmet")}>Test!</button>
    <h1>Yaş {age}</h1>
    <button onClick={() => setAge("20")}>Yaş Test!</button>

    <br></br>
    <h2>Friends</h2>
    {friends.map((friend, index) => (
      <div key={index}>{friend}</div>
    ))}
  <button onClick={() => setFriends([...friends, "Ayşe"])}>
    add new friends
  </button>

      <hr/>
      <br></br>

      <h2>Adress</h2>
      <div>
      {adress.title} {adress.zip}</div>
      <button onClick={() => setAdress({ title:"Kocaeli" , zip:"41300" })}>
      add new adress
      </button>


    </div>
  );
}

export default App;
