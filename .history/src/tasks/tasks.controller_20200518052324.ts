/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Body, Param, Delete, Patch, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-tasks.dto';

@Controller('tasks')
export class TasksController {
         private tasks: Task[] = [];
        
        getAllTasks(): Task[] {
            return this.tasks;
        }
        @Get()
        getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
            console.log(filterDto);
            return this.tasksService.getAllTasks();
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

