import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Decimal128, SchemaTypes, Types } from 'mongoose';
//import { TodoStatus } from './todo-status.enum';

export type TodoDocument = Todo & Document;

@Schema({ timestamps: true })
export class Todo {

    // @Prop({ type: SchemaTypes.ObjectId})
    // _id: Types.ObjectId;

    @Prop()
    title: String;

    // @Prop({ type: String })
    // parentId: any;

    @Prop()
    descriptions: String;

    // @Prop()
    // status: TodoStatus;

    // @Prop()
    // startTime: String;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);