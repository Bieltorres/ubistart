import { Test, TestingModule } from '@nestjs/testing';
import { FormController } from './form.controller';
import { FormService } from './form.service';
import { HttpModule } from '@nestjs/axios';  

describe('FormController', () => {
  let controller: FormController;
  let service: FormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule], 
      controllers: [FormController],
      providers: [FormService],
    }).compile();

    controller = module.get<FormController>(FormController);
    service = module.get<FormService>(FormService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

});
