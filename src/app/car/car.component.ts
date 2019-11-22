import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {

  constructor() { }

  @Input('carItem') exCar: { // введение данных в объект для последующего отображения в компоненте cars
    trademark: string;
    model: string;
    relDate: string;
    color: string;
    cols: number;
    rows: number;
  };

}
