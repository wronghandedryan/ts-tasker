import { Injectable, Get } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
//import { v4 as uuidv4 } from 'uuid/dist/v1';
//uuidv4();
import { v4 as uuidv4 } from 'uuid';
import { CreateTaskDto } from './dto/create-tasks.dto';
uuidv4();

@Injectable()
export class TasksService {
    private tasks: Task[] = []; 

    getAllTasks(): Task[] {
        return this.tasks;
    }

    createTask(createTaskDto: CreateTaskDto): Task {
        const { title, description } = createTaskDto;
        
        const task: Task = {
            id: uuidv4(),

            status: TaskStatus.OPEN,
        }

        this.tasks.push(task);
        return task;
    }
}
