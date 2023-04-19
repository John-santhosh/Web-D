import React, { useState } from "react";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [user, setUser] = useState({ name: "something" });
  function logOut() {
    setUser(null);
  }
  return (
    <nav className="navbar">
      <h5>Context-api</h5>
      <NavLinks user={user} logOut={logOut}></NavLinks>
    </nav>
  );
};

export default Navbar;
