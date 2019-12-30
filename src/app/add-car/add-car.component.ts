import {Component, EventEmitter, Input, Output} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Colors} from '../classes/ColorList';

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

  showInputs = false; // переменная контроля отображения input'ов
  carColor = Colors; // присваивание цветов из import

  // вывод в компонент cars c последующим отображением с помощью компонента car
  @Output('onAddCar') carEmitter = new EventEmitter<{id: number, trademark: string, model: string, relDate: string, color: string, cols: 1, rows: 1, isSold: boolean}>();

  showAdd() { // скрытие/отображение формы добавления карточки
    this.showInputs = !this.showInputs;
  }

  addCar() {
    let counter = 5;
    this.carEmitter.emit({ // добавление карточки
      id: counter++,
      trademark: this.newCar.value.mark,
      model: this.newCar.value.model,
      relDate: this.newCar.value.relDate,
      cols: 1,
      rows: 1,
      color: this.newCar.value.color,
      isSold: false
    });
  }

}
