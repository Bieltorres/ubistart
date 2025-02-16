import React, { useEffect, useState } from "react";
import { ListItem } from "./ListItem";
import { Text } from "../Text";
import s from "./style.module.css";

export const List = ({ users, setEditingUser }) => {
  return (
    <ul className={s.listUsers}>
      {users?.length > 0 ? <Text text={'Usuários cadastrados:'}  style={{ marginBottom: '20px' }}/> : ''}
      {users?.map((user) => (
        <ListItem key={user.email} user={user} onEdit={() => setEditingUser(user)}/>
      ))}
    </ul>
  );
};
