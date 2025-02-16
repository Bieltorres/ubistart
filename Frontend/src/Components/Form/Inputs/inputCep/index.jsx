import React, { useState, useEffect } from "react";
import s from "../style.module.css";

export const InputCep = ({ label, type, name, placeHolder, value, onChange, error }) => {
  const [isValid, setIsValid] = useState(true);
  const [isTouched, setIsTouched] = useState(false);

  const formatCep = (value) => value.replace(/\D/g, "").replace(/^(\d{5})(\d{1,3})$/, "$1-$2");

  const validateCep = (value) => /^\d{5}-\d{3}$/.test(value);

  const handleChange = (e) => {
    const rawValue = e.target.value;
    const formattedValue = formatCep(rawValue);
    onChange({ target: { name, value: formattedValue } });
    setIsTouched(true);
    setIsValid(validateCep(formattedValue));
  };

  useEffect(() => {
    if (value === "") {
      setIsTouched(false);
      setIsValid(true);
    } else if (isTouched) {
      setIsValid(validateCep(value));
    }
  }, [value, isTouched]);

  return (
    <div className={s.inputContainer}>
      <label className={s.inputLabel}>{label}</label>
      <input
        placeholder={placeHolder}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        maxLength={9}
        className={`${s.inputField} ${error || (!isValid && isTouched) ? s.error : ""}`}
      />
      {error && <span className={s.errorText}>{error}</span>}
      {!isValid && isTouched && !error && <span className={s.errorText}>CEP inválido</span>}
    </div>
  );
};
