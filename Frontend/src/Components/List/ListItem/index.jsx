import React from "react";
import s from "./style.module.css";

export const ListItem = ({ user, onEdit, }) => {
  console.log(user)
  return (
    <li className={s.itemList} onClick={onEdit}>
      <span className={s.inforUser}><strong>Usuário:</strong> {user.name} - {user.email} - {user.cep}.
      </span> <span className={s.inforUser}><strong>Endereço:</strong> {user.state}, {user.city}, {user.neighborhood}, {user.street} </span>
    </li>
  );
};
