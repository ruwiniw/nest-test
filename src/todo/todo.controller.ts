import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Res } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/createTodoDto'
import { UpdateTodoDto } from './dto/updateTodoDto';
import { Todo } from './todo.schema';
import { Types } from 'mongoose';
import { ParseObjectIdPipe } from './vali-object';
//import { SpaceShipValidatorPipe } from './validator';
import { ReadTodoDto } from './dto/readDTO'

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Get()
    getAllTodo(){
        console.log('getAllTodo');
        return this.todoService.getAllTodo();
    }

    // @Post()
    // createTodo(@Body(new SpaceShipValidatorPipe()) createTodoDto: CreateTodoDto){
    //     console.log('createTodo');
    //     return this.todoService.createTodo(createTodoDto);
    // }
    @Post()
    createTodo(@Body() createTodoDto: CreateTodoDto){
        console.log('createTodo');
        return this.todoService.createTodo(createTodoDto);
    }

    //@ApiParam({ name: 'id', type: String })
    @Get('/:id')
   // @Serialize(UserResponseDto)
    async getTodo(
    @Param('id', ParseObjectIdPipe) id: Types.ObjectId
    ){
        return this.todoService.getTodoById(id);

        // if (!foundUser) {
        // throw new NotFoundException('The user does not exist');
        // }

        //return foundUser;
    } 

    // @Get(':id')
    // getTodo(@Param('id',) id: number){
    //    // console.log('getTodo by id');
    //     return this.todoService.getTodoById(id);
    // }

    @Patch(':id')
    updateTodo(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto){
        console.log('updateTodo');
        return this.todoService.updateTodo(id, updateTodoDto);
    }

    @Delete(':id')
    deleteTodo(@Res() response, @Param('id') id: string){
        console.log('deleteTodo');
        return this.todoService.deleteTodo(id);
    }
}
