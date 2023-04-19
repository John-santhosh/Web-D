import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  function handelClick() {
    setCount(count + 1);
  }
  const decreaseCount = () => setCount(count - 1);
  return (
    <>
      <p>You Clicked {count} times</p>
      <button onClick={handelClick}> increase +</button>
      <br />
      <br />
      <button onClick={decreaseCount}>Decrease -</button>
      <Form></Form>
      <Form></Form>
    </>
  );
};

export default UseStateBasics;

// import { useState } from "react";
function Form() {
  const [fName, setFirstName] = useState("");
  const [lName, setLastName] = useState("");
  // let firstName = "";
  // let lastName = "";

  function handleFirstNameChange(e) {
    let firstName = e.target.value;
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    // lastName = e.target.value;
    setLastName(e.target.value);
  }

  function handleReset() {
    setFirstName("");
    setLastName("");

    // lastName = "";
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="First name"
        value={fName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lName}
        onChange={handleLastNameChange}
      />
      <h1>
        Hi, {fName} {lName}
      </h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
