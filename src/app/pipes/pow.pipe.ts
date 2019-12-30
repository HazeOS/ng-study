import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'appPow'
})

export class PowPipe implements PipeTransform {

  transform(value: number, powNumber: number = 1) {
    return Math.pow(value, powNumber) + ' (' + value + ' ^ ' + powNumber + ')'; // возведение в степень
  }

}
