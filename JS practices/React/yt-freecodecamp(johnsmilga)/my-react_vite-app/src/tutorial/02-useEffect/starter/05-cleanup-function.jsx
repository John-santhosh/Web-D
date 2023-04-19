import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [value, setValue] = useState(false);
  console.log("render");
  function changeState() {
    setValue(!value);
  }
  return (
    <>
      <button onClick={changeState}>toggle</button>
      {value && <RandomComponent />}
      {/*true  &&  true  */}
    </>
  );
};

function RandomComponent() {
  useEffect(() => {
    // console.log("test true");
    // const iniId = setInterval(() => {
    //   // console.log("interval");
    // }, 1000);
    // return () => {
    //   console.log("cleared");
    //   clearInterval(iniId);
    // };
    const someFun = () => {};
    window.addEventListener("scroll", someFun);
    return () => window.removeEventListener("scroll", someFun);
  }, []);
  return (
    <div>
      <h1>Hello there</h1>
    </div>
  );
}
export default CleanupFunction;
