import React from "react";

const Person = ({ name, nickName = "sucker", images }) => {
  const avatar =
    "https://images.pexels.com/photos/16378938/pexels-photo-16378938.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load";
  const pic = images?.[0]?.small?.url ?? avatar;
  return (
    <div>
      <h4>{name}</h4>
      <h5>nickname :{nickName}</h5>
      <img src={pic} alt={name} style={{ width: "50px" }} />
      <hr />
    </div>
  );
};

export default Person;
