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

Aqui está um exemplo do formulário de cadastro de usuário:

![Formulário de Cadastro](https://link-da-imagem-aqui.com)

---

## **📝 Como Rodar o Projeto**

### **Backend**

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
Navegue até a pasta do backend:
bash
Copiar
Editar
cd backend
Instale as dependências:
bash
Copiar
Editar
npm install
Inicie o servidor:
bash
Copiar
Editar
npm run start
O servidor estará rodando em http://localhost:3000.

Frontend
Navegue até a pasta do frontend:
bash
Copiar
Editar
cd frontend
Instale as dependências:
bash
Copiar
Editar
npm install
Inicie o servidor:
bash
Copiar
Editar
npm start
O frontend estará acessível em http://localhost:3001.

🧪 Testes
O projeto contém testes para garantir a integridade das funcionalidades.

Backend
O backend utiliza NestJS para os testes. Para rodá-los, use o comando:

bash
Copiar
Editar
npm run test