# **Projeto de Cadastro de Usuários**

Este projeto consiste em um **sistema de cadastro de usuários** utilizando **Node.js** (com **NestJS** e **Express**) no backend e **React** no frontend. O sistema permite cadastrar, listar e editar usuários, com validações de dados e integração com uma API externa para validação de CEP.

---

## **🔧 Tecnologias Utilizadas**

### **Backend:**
- **Node.js** com **NestJS** e **Express**
- **TypeScript**
- **BrasilAPI** para validação de CEP

### **Frontend:**
- **React**
- **JavaScript** (sem TypeScript no frontend)

---

## **⚙️ Funcionalidades**

- **Cadastro de Usuário**: Preenchimento de formulário com nome, e-mail e CEP.
- **Edição de Usuário**: Capacidade de editar dados de usuários cadastrados.

### **Validações:**
- **Nome**: Não pode conter números.
- **E-mail**: Validação de formato e checagem de duplicidade.
- **CEP**: Validação de formato e integração com a BrasilAPI para checar se o CEP existe.

---

## **📸 Formulário de Cadastro**

Formulário:

![Formulário de Cadastro](/Frontend/public/form.png)

---

## **📝 Como Rodar o Projeto**

### **Backend**

1. Clone o repositório:

```
git clone https://github.com/Bieltorres/ubistart
Navegue até a pasta do backend:

cd backend

Instale as dependências:
npm install

Inicie o servidor:
npm run start

O servidor estará rodando em http://localhost:3000.

Frontend
Navegue até a pasta do frontend:

cd frontend

Instale as dependências:
npm install

Inicie o servidor:
npm run dev

O frontend estará acessível em http://localhost:5173.

🧪 Testes
O projeto contém testes para garantir a integridade das funcionalidades.

O Backend utiliza NestJS para os testes. Para rodá-los, use o comando:
npm run test