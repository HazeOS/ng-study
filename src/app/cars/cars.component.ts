import {Component} from '@angular/core';
import {Card} from '../add-car/add-car.component';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent {

  constructor() { }

  cards: Card[] = []; // объявление массива для карточек

  // добавление в массив полученных из компонента add-car карточек
  updateCarList(car: { trademark: string, model: string, relDate: string, color: string, cols: 1, rows: 1, }) {
    this.cards.push(car as Card);
  }

}
