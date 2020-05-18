/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Body, Param, Delete, Patch, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-tasks.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
        if(Object.keys(filterDto).length){
            return this.tasksService.getTasksWithFilters(filterDto);
        } else {
            return this.tasksService.getAllTasks();
        }
    
}

@Get(':id')
getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getAllTasks();
}


@Post()
createTask(@Body('id') createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
}
@Delete(':id')
deleteTask(@Param('id') id: string) {
    this.tasksService.deleteTask(id);
}

@Patch(':id/status;')
updateTaskStatus(
            @Param('id') id: string,
            @Body('status') status: TasksStatus,
        ): Task {
    return this.tasksService.updateTaskStatus(id, status)
}

