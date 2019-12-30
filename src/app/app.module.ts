import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarsComponent } from './cars/cars.component';

import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

import {PowPipe} from './pipes/pow.pipe';

import {
  MatButtonModule,
  MatCheckboxModule, MatChipsModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTabsModule,
} from '@angular/material';
import { CarComponent } from './car/car.component';
import { AddCarComponent } from './add-car/add-car.component';
import { ChangeCarComponent } from './change-car/change-car.component';
import {HeaderDirective} from './header/directives/header.directive';
import { CarFilterPipe } from './pipes/car-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarsComponent,
    CarComponent,
    AddCarComponent,
    ChangeCarComponent,
    HeaderDirective,
    PowPipe,
    CarFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTabsModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
