import { useState } from "react";
import { validateName, validateEmail, validateCep } from "../Components/Form/validations";

export const useFormValidation = () => {
    const [errors, setErrors] = useState({});

    const validate = (name, value) => {
        let error = "";
        if (name === "name") error = validateName(value);
        if (name === "email") error = validateEmail(value);
        if (name === "cep") error = validateCep(value);

        setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    };

    return { errors, validate };
};
