import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
    console.log(input);
  };
  const logIn = () => {
    setUser({ name: input });
  };
  const logOut = () => {
    setUser(null);
  };
  return (
    <>
      {user ? (
        <>
          <h4>Hello There {user.name}</h4>
          <button onClick={logOut}>Log out</button>
        </>
      ) : (
        <>
          <h4>Please login</h4>
          <input type="text" onChange={handleInput} />
          <button onClick={logIn}>Log In</button>
        </>
      )}
    </>
  );
};

export default UserChallenge;
