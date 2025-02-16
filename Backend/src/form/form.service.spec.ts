import { Test, TestingModule } from '@nestjs/testing';
import { FormService } from './form.service';
import { HttpModule } from '@nestjs/axios';

describe('FormService', () => {
  let service: FormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule], 
      providers: [FormService],
    }).compile();

    service = module.get<FormService>(FormService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
