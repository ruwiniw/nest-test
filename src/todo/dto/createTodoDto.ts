import { IsString, Matches} from 'class-validator';
import { Decimal128, Types } from 'mongoose';
//import { printMemberName } from '../reges';
//import { printMemberName } from '../reges';

export class CreateTodoDto{

    //_id: Types.ObjectId;

    @IsString()
    title: string;

    @IsString()
    description: string;

    // printMemberName
    // startTime: string;

   // @IsString()
     @Matches(/^([01]\d|2[0-3]).?([0-5]\d)$/)
    //@IsString()
    startTime: String;
}



