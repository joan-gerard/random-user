import React, { useEffect, useState } from "react";
import "./App.scss";
import UserCard from "./UserCard";
import { UserType } from "./interface";
// import { fetchData } from "./utils";

function App() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // const firstNameRef = useRef<HTMLInputElement | null>(null);
  // const lastNameRef = useRef<HTMLInputElement | null>(null);'
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://randomuser.me/api/");
      const json = await data.json();
      setUsers(json.results);
    };

    fetchData();
    // return () => {
    //   fetchData("https://randomuser.me/api/", setUsers);
    setIsLoading(false);
    // };
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }

  // STARTS HERE
  const changeName = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    // eslint-disable-next-line
    const pattern = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

    const firstNameValue =
    firstName.length &&
    firstName.match(pattern)
        ? firstName
        : users[0].name.first;
    const lastNameValue =
    lastName.length &&
    lastName.match(pattern)
        ? lastName
        : users[0].name.last;

    if (users.length) {
      let user = users[0];
      const updatedUser = {
        ...user,
        name: { ...user.name, first: firstNameValue, last: lastNameValue },
      };
      setUsers([updatedUser]);
      setFirstName('')
      setLastName('')
    }
  };

  console.log(firstName);
  console.log(lastName);
  console.log('isLoading', isLoading);

  return (
    <div className="app">
      <h1>Generate a user...</h1>
      <UserCard users={users} />
      <form onSubmit={changeName}>
        <p>Change first name:</p>
        <input
          type="text"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value)
          }}

          // placeholder="change first name..."
          // ref={firstNameRef}
        />
      </form>
      <form onSubmit={changeName}>
        <p>Change last name:</p>
        <input
          type="text"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value)
          }}

          // placeholder="change last name..."
          // ref={lastNameRef}
        />
      </form>
    </div>
  );
}

export default App;

// A test2
