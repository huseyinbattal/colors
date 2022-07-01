import "./App.css";
import { useState } from "react";
import UserList from "./UserList";
import { UserContext } from "./context/UserContext";

const data = [
  {
    id: 1,
    name: "Adeline",
    email: "Macey.Abshire84@gmail.com",
    age: 25,
    color: "lightcyan",
  },
  {
    id: 2,
    name: "Cayla",
    email: "Marquise_Lockman@yahoo.com",
    age: 21,
    color: "honeydew",
  },
  {
    id: 3,
    name: "Alycia",
    email: "Petra_Emmerich86@hotmail.com",
    age: 46,
    color: "mistyrose",
  },
];

function App() {
  const [users, setUsers] = useState(data);

  const changeColor = (id, color) => {
    setUsers(
      users.map((userRow) =>
        userRow.id === id ? { ...userRow, color: color } : userRow
      )
    );
  };

  return (
    <UserContext.Provider value={{changeColor,users}} >
      <div className="App">
        <h1>Welcome</h1>
        <UserList/>
      </div>
    </UserContext.Provider>
  );
}

export default App;
