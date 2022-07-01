import React from "react";

function User({ user, changeColor }) {
  //console.log("USER.JS PROPS::",user,changeColor)
  return (
    <div style={{ backgroundColor: user.color, padding: "5px" ,borderBottom:"1px solid"}}>
      <h3>Name:{user.name}</h3>
      <p>E-mail:{user.email}</p>
      <p>Age:{user.age}</p>
          <p>Color:{user.color}</p>
          New Color:
      <input
        value={user.color}
        onChange={(e) => changeColor(user.id, e.target.value)}
      />
    </div>
  );
}

export default User;
