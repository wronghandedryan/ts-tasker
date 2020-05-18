import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-tasks.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}
        
        @Get()
        getAllTasks(): Task[] {
            return this.tasksService.getAllTasks();
        }

        @Get(/:id)
        getTaskById() {

        }

        @Post()
        createTask(createTaskDto: CreateTaskDto):  Task {
            return this.tasksService.createTask(createTaskDto);
        }
}

