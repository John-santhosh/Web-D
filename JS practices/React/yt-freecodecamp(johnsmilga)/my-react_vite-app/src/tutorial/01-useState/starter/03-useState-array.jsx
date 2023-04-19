import { useState } from "react";
import { data } from "../../../../data";
const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const clearAll = () => {
    // console.log("clearAll");
    setPeople([]);
  };
  const removePerson = (id) => {
    console.log(id);
    const newPeople = people.filter((person) => person.id !== id);
    console.log(newPeople);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((item) => {
        const { name, id } = item;
        return (
          <div key={id}>
            <p>{name}</p>
            <button onClick={() => removePerson(id)}>Remove</button>
          </div>
        );
      })}
      <button onClick={clearAll}>Clear items</button>
    </>
  );
};

// function Person({ name }) {
//   return (
//     <>
//       <p>{name}</p>
//       <button onClick={removePerson}>Remove</button>
//     </>
//   );
// }

export default UseStateArray;
