import React from "react";
import { Form } from "../Components/Form/";
import { List } from "../Components/List";
import { Card } from "../Components/Card";
import s from "./style.module.css";

export const Home = () => {
    return (
        <div className={s.wrapper}>
            <Card>
                <h1>Cadastro</h1>
                <Form />
                <h2>Usuários Cadastrados</h2>
            </Card>
            <List />
        </div>
    );
};
