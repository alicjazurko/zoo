import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { Animal } from '../animal';
import { MatDatepicker } from '@angular/material';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'datepicker-api',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class DatepickerApi implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


