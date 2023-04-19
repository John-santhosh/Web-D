import { useState } from "react";

const ErrorExample = () => {
  function increase() {
    console.log("done");
    console.log(count);
    return count++;
  }
  let count = 0;
  return (
    <>
      <h2>useState error example</h2>
      <p>{count}</p>
      <button onClick={increase}> increase +</button>
      <br />
      <br />
      <button>Decrease -</button>
    </>
  );
};

export default ErrorExample;
