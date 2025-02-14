import React, { useState } from "react";
import { useFormValidation } from "../../Hooks/useFormValidation";
import { Input } from "./Inputs";
import { SubmitButton } from "./SubmitButton";

export const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        cep: "",
    });

    const { errors, validate } = useFormValidation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validate(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errors.name && !errors.email && !errors.cep) {
            console.log("Dados enviados:", formData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label="Nome"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
            />
            <Input
                label="E-mail"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
            />
            <Input
                label="CEP"
                type="text"
                name="cep"
                value={formData.cep}
                onChange={handleChange}
                error={errors.cep}
            />
            <SubmitButton onClick={handleSubmit} disabled={Object.values(errors).some(err => err)} />
        </form>
    );
};