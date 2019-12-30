import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Output
} from '@angular/core';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements
  OnInit {
/*  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy*/

  @Input('carItem') exCar: { // введение данных в объект для последующего отображения в компоненте cars
    id: number;
    trademark: string;
    model: string;
    relDate: string;
    color: string;
    cols: number;
    rows: number;
  };

  // @ViewChild('carCard') carCard: ElementRef;
  ngAfterViewInit() {
    // console.log(this.carCard);
  }

  constructor() {
    console.log('Constructor Init');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
  /*
    ngOnChanges(changes: SimpleChanges): void {
      console.log('ngOnChanges', changes);
    }

    ngDoCheck(): void {
      console.log('ngDoCheck');
    }

    ngAfterContentInit(): void {
      console.log('ngAfterContentInit');
    }

    ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked');
    }

    ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked');
    }

    ngOnDestroy(): void {
      console.log('ngOnDestroy');
    }*/
}
