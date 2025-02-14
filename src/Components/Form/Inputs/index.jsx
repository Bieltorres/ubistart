import React from "react";
import s from "./style.module.css";

export const Input = ({ label, type, name, value, onChange, error }) => {
  return (
    <div className={s.inputContainer}>
      <label className={s.inputLabel}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={s.inputField}
      />
      {error && <span className={s.errorText}>{error}</span>}
    </div>
  );
};
