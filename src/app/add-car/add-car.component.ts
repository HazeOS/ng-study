import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export interface Card {// описание интерфейса карточки
  trademark: string;
  model: string;
  relDate: string;
  cols: number;
  rows: number;
  color: string;
}

export interface CarColor {// описание интерфейса цвета
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent {

  constructor() { }

  newCar = new FormGroup({ // создание полей формы для общей валидации
    mark: new FormControl(''),
    model: new FormControl(''),
    color: new FormControl(''),
    relDate: new FormControl(''),
  });


  Colors: CarColor[] = [// цвета
    {value: 'Красный', viewValue: '#a83240'},
    {value: 'Синий', viewValue: '#4632a8'},
    {value: 'Зеленый', viewValue: '#008c46'},
    {value: 'Желтый', viewValue: '#d7de1d'}
  ];

  showInputs = false;

  // вывод в компонент cars c последующим отображением с помощью компонента car
  @Output('onAddCar') carEmitter = new EventEmitter<{trademark: string, model: string, relDate: string, color: string, cols: 1, rows: 1}>();

  showAdd(event: Event) { // скрытие/отображение формы добавления карточки
    this.showInputs = !this.showInputs;
  }

  addCar() {
    this.carEmitter.emit({ // добавление карточки
      trademark: this.newCar.value.mark,
      model: this.newCar.value.model,
      relDate: this.newCar.value.relDate,
      cols: 1,
      rows: 1,
      color: this.newCar.value.color
    });
  }

}
