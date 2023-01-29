import { Injectable, InternalServerErrorException, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Todo, TodoDocument } from './todo.schema';
import { CreateTodoDto } from './dto/createTodoDto';
import { UpdateTodoDto } from './dto/updateTodoDto';
import { response } from 'express';

@Injectable()
export class TodoService {
    constructor(
        @InjectModel(Todo.name) private readonly todoModel: Model<TodoDocument>,
    ) {}

    async getAllTodo(): Promise<Todo[]> {
        try{
            const todo = await this.todoModel.find({});
            return todo;
        }catch(error){
            throw new InternalServerErrorException();
        }
    }

    async createTodo(createTodoDto: CreateTodoDto): Promise<Todo> {
        try{
            const { title, description, startTime } = createTodoDto;

            const todo = new this.todoModel({
                title, 
                description,
                startTime
            });
            await todo.save();
            return todo;
        }catch (error) {
            throw new InternalServerErrorException();
        }
    }

    async getTodoById(id: Types.ObjectId): Promise<Todo> {
       try{
            const todo = await this.todoModel.findOne({ _id: id });
            
            if(!todo){
                throw new NotFoundException('Todo not found');
            //     response.status(400).send("Not found");
            //     //console.log('Not found id');
            }
            return todo;
            
        }catch (error) {
            if(error.response){
                throw new HttpException(
                    error.response.message,
                    error.response.statusCode,
                );
            }
        }
        throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
       //throw new InternalServerErrorException();
    }

    async updateTodo(
        id: string,
        updateTodoDto: UpdateTodoDto,
    ): Promise<{ message: string }> {
        const body = { ...updateTodoDto };
        try{
            const updatedTodo = await this.todoModel.updateOne({ _id: id }, body);
            if(updatedTodo.modifiedCount == 0){
                throw new NotFoundException('Todo not found');
            }
            return{
                message: `Todo Updated Successfully`,
            };
        }catch (error){
            if(error.response){
                throw new HttpException(
                error.response.message,
                error.response.statusCode,
                );
            }
            throw new InternalServerErrorException();
        }
    }

    async deleteTodo(id: string): Promise<{message: string}>{
        try{
            const deleteTodo = await this.todoModel.deleteOne({ _id: id });
            if( deleteTodo.deletedCount == 0){
                throw new NotFoundException('Todo not found');
            }
            return{
                message: `Todo Deleted Successfullt`,
            };
        }catch (error) {
            if(error.response){
                throw new HttpException(
                    error.response.message, 
                    error.response.statusCode,
                );
            }
            throw new InternalServerErrorException();
        }
    }
}