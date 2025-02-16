import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

export interface User {
  name: string;
  email: string;
  cep: string;
  state?: string;
  city?: string;
  neighborhood?: string;
  street?: string;
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

  constructor(private readonly httpService: HttpService) { }

  async fetchCepData(cep: string): Promise<Partial<User> | null> {
    try {
      const response = await lastValueFrom(
        this.httpService.get(`https://brasilapi.com.br/api/cep/v1/${cep}`)
      );
      
      if (response.status !== 200) {
        return null;
      }

      const { state, city, neighborhood, street } = response.data;
      return { state, city, neighborhood, street };
    } catch (error) {
      return null;
    }
  }

  async register(body: Omit<User, 'state' | 'city' | 'neighborhood' | 'street'>): Promise<RegisterResponse> {
    const { name, email, cep } = body;

    if (!name || /\d/.test(name)) {
      return { error: 'Nome inválido' };
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return { error: 'E-mail inválido' };
    }
    if (!cep || !/^\d{5}-\d{3}$/.test(cep)) {
      return { error: 'Formato de CEP inválido (use XXXXX-XXX)' };
    }

    const addressData = await this.fetchCepData(cep);
    if (!addressData || !addressData.state || !addressData.city) {
      return { error: 'CEP inválido ou não encontrado' };
    }

    const existingUser = this.users.find((user) => user.email === email);
    if (existingUser) {
      return { error: 'Usuário com este e-mail já existe' };
    }

    const newUser: User = { name, email, cep, ...addressData };
    this.users.push(newUser);

    return { message: 'Usuário cadastrado com sucesso', user: newUser };
  }

  getUsers(): User[] {
    return this.users;
  }

  async updateUser(email: string, body: Partial<User>): Promise<RegisterResponse> {
    const userIndex = this.users.findIndex((user) => user.email === email);

    if (userIndex === -1) {
      return { error: 'Usuário não encontrado' };
    }

    let updatedUser = { ...this.users[userIndex], ...body };

    if (body.cep && body.cep !== this.users[userIndex].cep) {
      if (!/^\d{5}-\d{3}$/.test(body.cep)) {
        return { error: 'Formato de CEP inválido (use XXXXX-XXX)' };
      }
      const addressData = await this.fetchCepData(body.cep);
      if (!addressData) {
        return { error: 'CEP inválido ou não encontrado' };
      }
      updatedUser = { ...updatedUser, ...addressData };
    }

    this.users[userIndex] = updatedUser;

    return { message: 'Usuário atualizado com sucesso', user: updatedUser };
  }
}
