import { useState } from "react";
import { validateName, validateEmail, validateCep } from "../Components/Form/validations";

export const useFormValidation = () => {
    const [errors, setErrors] = useState({
      name: "",
      email: "",
      cep: "",
    });
  
    const validate = (name, value) => {
      const newErrors = { ...errors };
  
      if (name === "name" && value.trim() === "") {
        newErrors.name = "Nome é obrigatório";
      } else {
        newErrors.name = "";
      }
  
      if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
        newErrors.email = "E-mail inválido";
      } else {
        newErrors.email = "";
      }
  
      if (name === "cep") {
        if (!/^\d{5}-\d{3}$/.test(value)) {
          newErrors.cep = "CEP inválido";
        } else {
          newErrors.cep = "";
        }
      }
  
      setErrors(newErrors);
    };
  
    return { errors, validate };
  };
  