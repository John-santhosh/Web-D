import React from "react";

const UserContainer = ({ user, logOut }) => {
  console.log(user, logOut);
  return (
    <div>
      {user ? (
        <button onClick={() => logOut()}>reset</button>
      ) : (
        <p>please Login</p>
      )}
    </div>
  );
};

export default UserContainer;
