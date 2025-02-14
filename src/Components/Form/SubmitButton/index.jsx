import React from "react";

export const SubmitButton = ({ onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      Enviar
    </button>
  );
};