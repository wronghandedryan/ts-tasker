/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, Get, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
//import { v4 as uuidv4 } from 'uuid/dist/v1';
//uuidv4();
import { v1 as uuidv1 } from 'uuid';
uuidv1(); // ⇨ '2c5ea4c0-4067-11e9-8bad-9b1deb4d3b7d'
import { CreateTaskDto } from './dto/create-tasks.dto';
import { GetTasksFilterDto } from './dto/getTask.filter.dto';


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
        
    getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
        const { status, search } = filterDto;

        let tasks = this.getAllTasks(); 

        if (status) {
            tasks = tasks.filter(task => task.status === status);
        }

        if (search) {
            tasks = tasks.filter(taks => 
                tasks.title.includes(search) ||
                tasks.description.includes(search),);
        }

        return tasks;
    }
    getTaskById(id: string) {
        const found =  this.tasks.find(Task => Task.id === id);

        if(!found) {
            throw new NotFoundException
        }
        return found;
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
        this.tasks = this.tasks.filter(tasks => tasks.id !== id);
    }
    updateTaskStatus(id: string, status: TaskStatus) {
        const task = this.getTaskById(id);
        task.status = status;
        return task; 
    }
}
