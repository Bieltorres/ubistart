import React from "react";

export const ListItem = ({ user }) => {
  return (
    <li>
      {user.name} - {user.email} - {user.cep}
    </li>
  );
};
