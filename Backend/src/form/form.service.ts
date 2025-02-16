import { Injectable } from '@nestjs/common';

export interface User {
  name: string;
  email: string;
  cep: string;
}

export interface RegisterResponseSuccess {
  message: string;
  user: User;
}

export interface RegisterResponseError {
  error: string;
}

export type RegisterResponse = RegisterResponseSuccess | RegisterResponseError;

@Injectable()
export class FormService {
  private users: User[] = [];

  register(body: any): RegisterResponse {
    const { name, email, cep } = body;

    if (!name || /\d/.test(name)) {
      return { error: 'Nome inválido' };
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return { error: 'E-mail inválido' };
    }
    if (!cep || !/^\d{5}-\d{3}$/.test(cep)) {
      return { error: 'CEP inválido' };
    }

    // Verifica se o usuário já existe pelo e-mail
    const existingUser = this.users.find((user) => user.email === email);
    if (existingUser) {
      return { error: 'Usuário com este e-mail já existe' };
    }

    const newUser: User = { name, email, cep };
    this.users.push(newUser);
    return { message: 'Usuário cadastrado com sucesso', user: newUser };
  }

  getUsers(): User[] {
    return this.users;
  }

  updateUser(email: string, body: Partial<User>): RegisterResponse {
    const userIndex = this.users.findIndex((user) => user.email === email);
    
    if (userIndex === -1) {
      return { error: 'Usuário não encontrado' };
    }

    // Atualiza apenas os campos fornecidos
    this.users[userIndex] = { ...this.users[userIndex], ...body };

    return { message: 'Usuário atualizado com sucesso', user: this.users[userIndex] };
  }
}
