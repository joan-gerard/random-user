import React from "react";
import "./UserCard.scss";
import { UserType } from "./interface";

type Props = {
  users: UserType[];
};

const UserCard: React.FC<Props> = ({ users }) => {
  return (
    <div className="userCard">
      {users.map((user, idx) => (
        <div key={idx} className="user">
          <div className="left-panel">
            <img
              src={user.picture.large}
              alt={`${user.name.first} profile`}
            />
            <h2>
              {user.name.first} {user.name.last}
            </h2>
          </div>
          <div className="right-panel">
            <p>
              <span>Gender: </span>
              {user.gender}
            </p>
            <p>
              <span>Age: </span>
              {user.dob.age}
            </p>
            <p>
              <span>Address: </span>
              {user.location.street.number}, {user.location.street.name}
            </p>
            <p>
              <span>City: </span>
              {user.location.city} - {user.location.postcode}
            </p>
            <p>
              <span>Country: </span>
              {user.location.country}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
