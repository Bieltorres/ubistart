import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { FormService, RegisterResponse, User } from './form.service';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post('register')
  register(@Body() body: User): RegisterResponse {
    return this.formService.register(body);
  }

  @Get('register')
  getUsers(): User[] {
    return this.formService.getUsers();
  }

  @Put('register/:email')
  updateUser(@Param('email') email: string, @Body() body: Partial<User>): RegisterResponse {
    return this.formService.updateUser(email, body);
  }
}
