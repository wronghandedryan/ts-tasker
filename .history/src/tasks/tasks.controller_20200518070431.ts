import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-tasks.dto';
//import { GetTasksFilterDto } from './dto/getTask.filter.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
        if (Object.keys(filterDto).length){
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
@UsePipes(ValidationPipe)
createTask(@Body('id') createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
}
@Delete(':id')
deleteTask(@Param('id') id: string) {
    const found = this.getTaskById(id);
    console.log(found)
    this.tasksService.deleteTask(id);
}

@Patch(':id/status')
updateTaskStatus(
    const task = this.getTaskById(id);
    task.status = status;
    return task;
}

}
