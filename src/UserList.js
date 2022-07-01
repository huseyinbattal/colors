import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";
import User from "./User";

function UserList({ changeColor, users }) {
  //console.log("USERLIST.JS PROPS::", changeColor, users);
  const contextData = useContext(UserContext);
  console.log("USER-LIST-CONTEXT-DATA::",contextData);

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
