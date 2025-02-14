import React from "react";
import { Form } from "../Components/Form/";
import { List } from "../Components/List";
import { Card } from "../Components/Card";
import s from "./style.module.css";
import { Title } from "../Components/Title";
import { Text } from "../Components/Text";
import { Img } from "../Components/Img";

export const Home = () => {
    return (
        <div className={s.wrapper}>
            <Img url="./logo-ubistart.png" alt="logo Ubistart" />
            <Card>
                <Title text={'Formulário de cadastro'}/>
                <Form />
                <List/>
            </Card>
            <List />
        </div>
    );
};
