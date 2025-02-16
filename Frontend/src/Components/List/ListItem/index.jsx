import React from "react";
import s from "./style.module.css";

export const ListItem = ({ user, onEdit, }) => {
  return (
    <li className={s.itemList} onClick={onEdit}>
      {user.name} - {user.email} - {user.cep}
    </li>
  );
};
