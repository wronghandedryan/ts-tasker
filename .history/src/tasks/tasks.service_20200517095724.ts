import { Injectable, Get } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
    private tasks: Task[] = []; 

    getAllTasks(): Task[] {
        return this.tasks;
    }

    createTask(title: string, description: string) {

    }
}
