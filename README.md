Projeto de Cadastro de Usuários
Este projeto consiste em um sistema de cadastro de usuários utilizando Node.js (com NestJS e Express) no backend e React no frontend. O sistema permite cadastrar, listar e editar usuários, com validações de dados e integração com uma API externa para validação de CEP.

Tecnologias Utilizadas
Backend:

Node.js com NestJS e Express.
TypeScript.
BrasilAPI para validação de CEP.
Frontend:

React.
JavaScript (sem TypeScript no frontend).
Validações:

Nome: Não permite números no nome.
E-mail: Validação de formato e checagem de duplicidade.
CEP: Validação de formato e integração com a BrasilAPI para checar se o CEP existe.
Funcionalidades
Cadastro de Usuário: Preenchimento de formulário com nome, e-mail e CEP.
Edição de Usuário: Capacidade de editar dados de usuários cadastrados.
Validações:
Nome não pode conter números.
E-mail deve ser válido e não pode se repetir.
CEP deve ter formato válido e ser verificado com a BrasilAPI.
Listagem de Usuários: Exibe todos os usuários cadastrados e permite a edição de seus dados.
Como Rodar o Projeto
Backend
Clone o repositório:

bash
Copiar
Editar
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

Testes
O projeto contém testes para garantir a integridade das funcionalidades.

Backend
O backend utiliza NestJS para os testes. Para rodá-los, use o comando:

bash
Copiar
Editar
npm run test
Frontend
O frontend inclui testes unitários para garantir a qualidade da interface. Execute os testes com:

bash
Copiar
Editar
npm run test
Conclusão
Este projeto demonstra a utilização de NestJS e Express para o backend, além de React no frontend, com foco em validação de dados e integração com APIs externas para validação de CEP.

