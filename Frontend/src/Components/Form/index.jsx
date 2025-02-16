import React, { useEffect, useState } from "react";
import { useFormValidation } from "../../Hooks/useFormValidation";
import { Input } from "./Inputs";
import { SubmitButton } from "./SubmitButton";
import { InputCep } from "./Inputs/inputCep";
import { AlertMessage } from "../AlertMessage";
import s from "./style.module.css";
import { Loading } from "../Loading";

export const Form = ({ onUserAdded, editingUser, setEditingUser }) => {
    const [formData, setFormData] = useState({ name: "", email: "", cep: "" });
    const { errors, validate } = useFormValidation();
    const [alert, setAlert] = useState({ show: false, type: "", message: "" });
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (editingUser) {
            setFormData(editingUser);
            setIsEditing(false);
        }
    }, [editingUser]);

    useEffect(() => {
        if (editingUser) {
            setIsEditing(JSON.stringify(formData) !== JSON.stringify(editingUser));
        }
    }, [formData, editingUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        // Impedir números no campo de nome
        if (name === "name" && !/^[A-Za-zÀ-ÖØ-öø-ÿ\s]*$/.test(value)) {
            return;
        }
    
        setFormData({ ...formData, [name]: value });
        validate(name, value);
    
        if (editingUser) {
            setIsEditing(true);
        }
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!errors.name && !errors.email && !errors.cep) {
            await saveUser();
        }
    };

    const saveUser = async () => {
        setLoading(true);
        try {
            const method = editingUser ? "PUT" : "POST";
            const url = editingUser
                ? `http://localhost:3000/form/update/${editingUser.email}`
                : 'http://localhost:3000/form/register';

            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok || result.error) {
                setAlert({ show: true, type: "error", message: result.error || "Erro ao salvar usuário" });
                return;
            }

            setFormData({ name: "", email: "", cep: "" });
            setAlert({ show: true, type: "success", message: editingUser ? "Usuário atualizado!" : "Cadastro realizado com sucesso!" });
            onUserAdded();
            setEditingUser(null);

        } catch (error) {
            setAlert({ show: true, type: "error", message: "Erro na comunicação com o servidor" });
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <form onSubmit={handleSubmit} className={s.form}>
                <Input
                    label="Nome"
                    type="text"
                    name="name"
                    placeHolder="Digite seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                />
                <Input
                    label="E-mail"
                    type="email"
                    name="email"
                    placeHolder="Email@exemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    disabled={editingUser ? true : false}
                />
                <InputCep
                    label="CEP"
                    type="text"
                    name="cep"
                    placeHolder="Digite o cep"
                    value={formData.cep}
                    onChange={handleChange}
                    error={errors.cep}
                />
                <SubmitButton
                    onClick={handleSubmit}
                    disabled={
                        !formData.name ||
                        !formData.email ||
                        !formData.cep ||
                        Object.values(errors).some(err => err) ||
                        (editingUser ? !isEditing : false)
                    }
                />
            </form>

            {alert.show && <AlertMessage type={alert.type} message={alert.message} onClose={() => setAlert({ ...alert, show: false })} />}
            {loading && (<Loading />)}
        </>
    );
};
