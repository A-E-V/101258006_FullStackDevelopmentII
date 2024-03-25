import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'RemoveSpaces'})
export class RemoveSpaces implements PipeTransform {
    transform(value: string): string {
        let newStr = value.replace('-', ' ');
        return newStr;
    }
}