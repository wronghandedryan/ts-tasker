import { PipeTransform } from "@nestjs/common";

export class TaskStatusValidationPipe implements PipeTransform {
    transform() {
        transform(value: AnalyserNode, metadata: ArgumentMetadata) {
            console.log('value', value);
            console.log('metadata', metadata);
            
            return value;
        }

    }
}