import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { FormService, RegisterResponse, User } from './form.service';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post('register')
  async register(@Body() body: User): Promise<RegisterResponse> { 
    return await this.formService.register(body);
  }

  @Get('register')
  getUsers(): User[] {
    return this.formService.getUsers();
  }

  @Put('update/:email')
  async updateUser(@Param('email') email: string, @Body() body: Partial<User>): Promise<RegisterResponse> {  
    return await this.formService.updateUser(email, body);
  }
}
