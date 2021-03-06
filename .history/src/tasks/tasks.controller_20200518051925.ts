/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-tasks.dto';

@Controller('tasks')
export class TasksController {
    constructor( private tasksService: TasksService) {}
        
        @Get()
        getTasks(filterDto: GetTasksFilterDto): Task[] {
            return this.tasksService.getAllTasks(): Task[] {

            }
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
            this.tasksService.deleteTask(id);
        }

        @Patch(':id/status')
        updateTaskStatus(
            @Param('id') id: string,
            @Body('status') status: TaskStatus,
        ): Task {
            return this.tasksService.updateTaskStatus(id, status;)
        }
}

