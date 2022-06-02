import React, { useEffect, useState } from "react";
import "./App.scss";
import UserCard from "./UserCard";
import { UserType } from "./interface";
// import { fetchData } from "./utils";

function App() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // const sleep = (ms: number) =>
  //   new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      // await sleep(9000);
      const data = await fetch("https://randomuser.me/api/");
      const json = await data.json();
      setUsers(json.results);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const changeName = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    // eslint-disable-next-line
    const pattern = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

    const firstNameValue =
      firstName.length && firstName.match(pattern)
        ? firstName
        : users[0].name.first;
    const lastNameValue =
      lastName.length && lastName.match(pattern)
        ? lastName
        : users[0].name.last;

    if (users.length) {
      let user = users[0];
      const updatedUser = {
        ...user,
        name: { ...user.name, first: firstNameValue, last: lastNameValue },
      };
      setUsers([updatedUser]);
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div className="app">
      <h1>Generate a user...</h1>
      <UserCard users={users} isLoading={isLoading} />
      <form className="firstName-form" onSubmit={changeName}>
        <p>Change first name:</p>
        <input
          type="text"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </form>
      <form onSubmit={changeName}>
        <p>Change last name:</p>
        <input
          type="text"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </form>
    </div>
  );
}

export default App;

// A test2
