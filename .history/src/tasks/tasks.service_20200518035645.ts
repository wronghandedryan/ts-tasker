import { Injectable, Get } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
//import { v4 as uuidv4 } from 'uuid/dist/v1';
//uuidv4();
import { v1 as uuidv1 } from 'uuid';
uuidv1(); // ⇨ '2c5ea4c0-4067-11e9-8bad-9b1deb4d3b7d'
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
            id: uuidv1(),
            title,
            description,
            status: TaskStatus.OPEN,
        }

        this.tasks.push(task);
        return task;
    }
}
