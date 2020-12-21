import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'recortar'})
export class RecortarPipe implements PipeTransform {
  CANT_CHARS = 25
  transform(value: string): string {
    if (!value) { return value; }
    return value.substring(0, this.CANT_CHARS) + '...';
  }
}
