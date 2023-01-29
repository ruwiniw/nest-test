import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './createTodoDto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {}