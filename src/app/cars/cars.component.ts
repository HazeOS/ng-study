import {Component} from '@angular/core';
import {Card} from '../classes/Card';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {cars} from '../classes/CarList';
import {FormControl, FormGroup} from '@angular/forms';
import {Colors} from '../classes/ColorList';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent {

  car: Card;

  constructor() { }
  asyncTitle =  of('Car Search').pipe(delay(2000));
  searchCar = ''; // Поисковый запрос для статического массива
  showChangeForm = false; // Контроль отображения полей изменения
  showNgSwitch = false; // Контроль отображения примера Switch
  carColor = Colors; // Приваивание import в переменную

  changeCar = new FormGroup({ // создание полей формы для общей валидации
    mark: new FormControl(''),
    model: new FormControl(''),
    color: new FormControl(''),
    relDate: new FormControl(''),
  });

  staticCars = [ // Массив статических машин для примера с поиском
    {name: 'Ford', description: 'Mustang', isSold: false},
    {name: 'Mazda', description: 'RX-7', isSold: false},
    {name: 'Bentley', description: 'Mulsanne', isSold: false},
    {name: 'Audi', description: 'A8', isSold: false},
    {name: 'Mercedes', description: 'C63 AMG', isSold: false},
    {name: 'BMW', description: 'M5 E34', isSold: false},
  ];

  items: number[] = [1, 2, 3, 4, 5]; // для ng-Switch
  current = 1; // для ng-Switch
  carList = cars; // определение списка машин, полученного из import
  selectedCar: Card; // определение класса для выбранной машины

  // добавление в массив полученных из компонента add-car карточек
  updateCarList(car: {id: number, trademark: string, model: string, relDate: string, color: string, cols: 1, rows: 1, isSold: boolean }) {
    cars.push(car as Card);
  }

  // пример удаления карточки
  deleteCar(car) {
    const ind = cars.indexOf(car);
    cars.splice(ind, 1);
  }
  // пример с ng-Switch
  itemPick(item: number) {
    this.current = item;
  }
  // редактирование карточки
  editCar(car: Card) {
    this.showChangeForm = true;
    this.selectedCar = car;
  }

  // "сохранение" карточки
  commitCar(car: Card) {
    this.showChangeForm = false;
  }

  NgSwitch() {
    this.showNgSwitch = !this.showNgSwitch;
  }
}
