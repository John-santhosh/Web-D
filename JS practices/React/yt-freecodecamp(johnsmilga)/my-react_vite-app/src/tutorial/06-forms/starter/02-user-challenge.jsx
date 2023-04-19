import { data } from "../../../../data";
import { useState } from "react";
const UserChallenge = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState(data);
  function handleInput(e) {
    setName(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // people.push();
    const newUser = { id: people.length + 1, name: name };
    setPeople([...people, newUser]);
    setName("");
  };
  function handleRemove(id) {
    const updatedPeople = people.filter((person) => person.id !== id);
    setPeople(updatedPeople);
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-input"
            id="name"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      {people.map((person) => {
        return (
          <div key={person.id}>
            <h4 key={person.id}>{person.name}</h4>
            <button onClick={() => handleRemove(person.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
