import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter',
  // pure: false // динамически вызывает пайп при добавлении элементов, может торомозить приложение
})
export class CarFilterPipe implements PipeTransform {

  transform(carList, searchQuery: string) {
    console.log('Pipe Started');
    if (carList.length === 0 || searchQuery === '') { // Проверка на пустоту массива или запроса
      return carList;
    }
    // Перебор всех элементов массива, сравнивая имя с поисковым запросом посимвольно
    return carList.filter(car => car.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1 || car.description.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1);
  }

}
