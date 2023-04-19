import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "pete",
    age: 24,
    hobby: "read books",
  });
  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [hobby, setHobby] = useState(" Read Books");
  function updateState() {
    setPerson({
      name: "john",
      age: 22,
      hobby: "Scream at the computer",
    });
  }
  return (
    <>
      <h2>useState object example</h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoys: {person.hobby}</h3>

      <button onClick={updateState}>show Next</button>
    </>
  );
};

export default UseStateObject;
