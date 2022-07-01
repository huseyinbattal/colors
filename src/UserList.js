import React from "react";
import User from "./User";

function UserList({ changeColor, users }) {
  console.log("USERLIST.JS PROPS::", changeColor, users);

  return (
    <div>
      UserList
      {/* <User changeColor={changeColor} user={users[0]} /> */}
      {users.map((user) => (
        <User key={user.id} changeColor={changeColor} user={user} />
      ))}
    </div>
  );
}

export default UserList;
