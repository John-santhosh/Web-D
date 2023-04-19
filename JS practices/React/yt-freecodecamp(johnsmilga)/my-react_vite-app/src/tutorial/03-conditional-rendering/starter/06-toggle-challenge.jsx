import { useState } from "react";
const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);
  function toggleState() {
    setShowAlert(!showAlert);
  }

  return (
    <>
      <h1>Ternary Operator</h1>
      {showAlert ? <p>value true</p> : <p>value false</p>}
      <button onClick={toggleState}>click Me</button>
    </>
  );
};

// function
export default ToggleChallenge;
