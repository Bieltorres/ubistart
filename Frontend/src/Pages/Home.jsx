import React, { use, useEffect, useState } from "react";
import { Form } from "../Components/Form/";
import { List } from "../Components/List";
import { Card } from "../Components/Card";
import s from "./style.module.css";
import { Title } from "../Components/Title";
import { Text } from "../Components/Text";
import { Img } from "../Components/Img";
import { Loading } from "../Components/Loading";

export const Home = () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [showLoading, setShowLoading] = useState(false);
    const [editingUser, setEditingUser] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);
    
    const fetchUsers = async () => {
        setShowLoading(true);
        try {
          const response = await fetch('http://localhost:3000/form/register', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
            mode: 'cors'
          });
    
          const data = await response.json();
    
          if (response.ok) {
            setUsers(data);
          } else {
            console.log('outro status');
          }
        } catch (error) {
          console.error('Erro na requisição', error);
        }
        setShowLoading(false);
      };

    return (
        <div className={s.wrapper}>
            <Img url="./logo-ubistart.png" alt="logo Ubistart" />
            <Card>
                <Title text={'Formulário de cadastro'}/>
                <Form showLoading={setLoading} onUserAdded={fetchUsers} editingUser={editingUser} setEditingUser={setEditingUser} />
                <List users={users} setEditingUser={setEditingUser} />
            </Card>
            <List />
            {showLoading && (<Loading/>)}
        </div>
    );
};
