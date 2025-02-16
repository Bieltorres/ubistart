import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'; 
import { FormController } from './form.controller';
import { FormService } from './form.service';

@Module({
  imports: [HttpModule], 
  controllers: [FormController],
  providers: [FormService],
  exports: [FormService], 
})
export class FormModule {}
