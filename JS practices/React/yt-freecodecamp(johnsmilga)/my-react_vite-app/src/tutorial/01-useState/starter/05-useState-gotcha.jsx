import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);
  const handelClick = () => {
    setTimeout(() => {
      setCount((prevState) => prevState + 1);
    }, 2000);
  };
  const decreaseCount = () => setCount(count - 1);
  return (
    <>
      <h2>useState "gotcha"</h2>
      <p>You Clicked {count} times</p>
      <button onClick={handelClick}> increase +</button>
      <br />
      <br />
      <button onClick={decreaseCount}>Decrease -</button>
    </>
  );
};

export default UseStateGotcha;
