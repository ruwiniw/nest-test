import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches} from 'class-validator';
import { Decimal128, Types } from 'mongoose';


export class ReadTodoDto{

   // @ApiProperty({description: ''})
    _id: Types.ObjectId;

    title: string;

    descriptions: string;

}



