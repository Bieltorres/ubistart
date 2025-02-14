import React, { useState } from "react";
import { useFormValidation } from "../../Hooks/useFormValidation";
import { Input } from "./Inputs";
import { SubmitButton } from "./SubmitButton";
import s from "./style.module.css";
import { InputCep } from "./Inputs/inputCep";

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
        <form onSubmit={handleSubmit} className={s.form}>
            <Input
                label="Nome"
                type="text"
                name="name"
                placeHolder={'Digite seu nome'}
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
            />
            <Input
                label="E-mail"
                type="email"
                name="email"
                placeHolder={'Email@exemplo.com'}
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
            />
            <InputCep
                label="CEP"
                type="text"
                name="cep"
                placeHolder={'Digite o cep'}
                value={formData.cep}
                onChange={handleChange}
                error={errors.cep}
            />
            <SubmitButton onClick={handleSubmit} disabled={Object.values(errors).some(err => err)} />
        </form>
    );
};