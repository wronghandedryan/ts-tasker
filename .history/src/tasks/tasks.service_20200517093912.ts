import { Injectable, Get } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
    private Task: Task = [];
    
    getAllTasks(): Task[] {
        return this.tasks;
    }
}
