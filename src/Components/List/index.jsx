import React from "react";
import {ListItem} from "./ListItem";

export const List = ({ users = [] }) => {
  return (
    <ul>
      {users.map((user) => (
        <ListItem key={user.email} user={user} />
      ))}
    </ul>
  );
};
