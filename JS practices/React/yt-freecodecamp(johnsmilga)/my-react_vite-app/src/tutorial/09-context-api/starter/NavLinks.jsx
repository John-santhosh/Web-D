import React from "react";
import UserContainer from "./UserContainer";
const NavLinks = (props) => {
  // console.log(props);
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>

      <UserContainer {...props}></UserContainer>
    </div>
  );
};

export default NavLinks;
