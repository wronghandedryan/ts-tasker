/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-tasks.dto';

@Controller('tasks')
export class TasksController {
    constructor( private tasksService: TasksService) {}
        
        @Get()
        getAllTasks(): Task[] {
            return this.tasksService.getAllTasks();
        }

        @Get(':id')
        getTaskById(@Param('id') id: string): Task {
            return this.tasksService.getAllTasks();
        }

        @Post()
        createTask(createTaskDto: CreateTaskDto):  Task {
            return this.tasksService.createTask(createTaskDto);
        }
        @Delete(':id')
        deleteTask(@Param('id') id: string) {
            this.tasksService.deleteTask(id)
        }

        @Patch(':id')
        updateTaskStatus(id: string, status: TaskSt)
}

