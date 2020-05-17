import { Injectable, Get } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
    private tasks: Task = [];

    @Get()
    getAllTasks(): Task[] {
        return this.tasks;
    }
}
