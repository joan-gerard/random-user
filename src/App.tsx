import React, { useEffect, useRef, useState } from "react";
import "./App.scss";
import UserCard from "./UserCard";
import { UserType } from "./interface";
import { fetchData } from "./utils";

function App() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const firstNameRef = useRef<HTMLInputElement | null>(null);
  const lastNameRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    return () => {
      fetchData("https://randomuser.me/api/", setUsers);
      setIsLoading(false);
    };
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }

  const changeName = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    // eslint-disable-next-line
    const pattern = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

    const firstNameValue =
      firstNameRef.current?.value.length &&
      firstNameRef.current?.value.match(pattern)
        ? firstNameRef.current?.value
        : users[0].name.first;
    const lastNameValue =
      lastNameRef.current?.value.length &&
      lastNameRef.current?.value.match(pattern)
        ? lastNameRef.current?.value
        : users[0].name.last;

    if (users.length) {
      let user = users[0];
      const updatedUser = {
        ...user,
        name: { ...user.name, first: firstNameValue, last: lastNameValue },
      };
      setUsers([updatedUser]);
    }
  };

  return (
    <div className="app">
      <h1>Generate a user...</h1>
      <UserCard users={users} />
      <form onSubmit={changeName}>
        <p>Change first name:</p>
        <input
          type="text"
          // placeholder="change first name..."
          ref={firstNameRef}
        />
      </form>
      <form onSubmit={changeName}>
        <p>Change last name:</p>
        <input
          type="text"
          // placeholder="change last name..."
          ref={lastNameRef}
        />
      </form>
    </div>
  );
}

export default App;

// A test2