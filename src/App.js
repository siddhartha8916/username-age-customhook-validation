import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const DUMMY_DATA = [
  {
    id: 1,
    name: "Siddhartha Kumar",
    age: 25,
  },
  {
    id: 2,
    name: "Anurag Kumar",
    age: 25,
  },
];

function App() {
  const [users, setUsers] = useState(DUMMY_DATA);

  const addUserHandler = (user) => {
    setUsers((prevData) => {
      return [...prevData, user];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </>
  );
}

export default App;
