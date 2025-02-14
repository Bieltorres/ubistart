import React, { useState, useEffect } from "react";
import s from "./style.module.css";

export const Input = ({ label, type, name, placeHolder, value, onChange, error }) => {
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (name === "email") {
      const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
      setIsValid(validEmail);
    } else {
      setIsValid(value.trim() !== "");
    }
  }, [value, name]);

  return (
    <div className={s.inputContainer}>
      <label className={s.inputLabel}>{label}</label>
      <input
        placeHolder={placeHolder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`${s.inputField} ${error ? s.error : ""}`}
      />
      {error && <span className={s.errorText}>{error}</span>}
    </div>
  );
};
