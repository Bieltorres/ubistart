import React from "react";
import {ListItem} from "./ListItem";
import { Text } from "../Text";

export const List = ({ users = [] }) => {
  return (
    <ul>
      {users > 0 ? (
        <Text text={'Usuários cadastrados:'}/>
      ) : ''}
      {users.map((user) => (
        <ListItem key={user.email} user={user} />
      ))}
    </ul>
  );
};
