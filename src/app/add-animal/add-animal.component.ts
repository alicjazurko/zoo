import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';
import { AnimalsList } from '../animalsList';
import { AnimalsComponent } from '../animals/animals.component';
import { MatDatepicker } from '@angular/material/datepicker';


@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit{

  day = 'dzień';
  month = 'miesiąc';
  year = 'rok';

  constructor(
    private animalService: AnimalService
  ) {

   }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.getAnimals();
  }

  // showDate(m: number, d: number, r: number): void {
  //   const date = new Date(m + '/' + d + '/' + r);
  //   const modDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  //   console.log(modDate, date);

  // }

  add(id, name: string, box: string, m: number, d: number, r: number): void {
    const date = new Date(m + '/' + d + '/' + r);
    const modDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    console.log(modDate, date);
    id = this.animalService.animals.length + 1;
    if (!name) { return; }
    this.animalService.addAnimal({id, name, box, modDate } as Animal).subscribe(animal => {
        this.animalService.animals.push(animal);
      });
    console.log(this.animalService.animals);
  }

  getAnimals(): void {
    this.animalService.getAnimals().subscribe(animals => this.animalService.animals = animals);
  }

}
