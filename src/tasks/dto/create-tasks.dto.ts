import { IsNotEmpty } from 'class-validator';


export class CreateTaskDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;
}

//import class-validator 

//import class-transformer