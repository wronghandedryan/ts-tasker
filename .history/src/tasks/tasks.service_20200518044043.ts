import { Injectable, Get } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
//import { v4 as uuidv4 } from 'uuid/dist/v1';
//uuidv4();
import { v1 as uuidv1 } from 'uuid';
uuidv1(); // ⇨ '2c5ea4c0-4067-11e9-8bad-9b1deb4d3b7d'
import { CreateTaskDto } from './dto/create-tasks.dto';

//const v1options = {
//  node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
//  clockseq: 0x1234,
//  msecs: new Date('2011-11-01').getTime(),
//  nsecs: 5678,
//};
//uuidv1(v1options); // ⇨ '710b962e-041c-11e1-9234-0123456789ab'


@Injectable()
export class TasksService {
    private tasks: Task[] = []; 

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTaskById(id: string) {
        return this.tasks.find(Task => Task.id === id);
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
    deleteTask(id: string) {
        this.tasks.filter(task => task.id !== id);
    }
}
