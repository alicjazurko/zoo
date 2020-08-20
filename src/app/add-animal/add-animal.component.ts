import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';
import { AnimalsList } from '../animalsList';
import { AnimalsComponent } from '../animals/animals.component';



@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit{

  constructor(
    private animalService: AnimalService
  ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.getAnimals();
  }


  add(id, name: string, box: string): void {
    id = this.animalService.animals.length + 1;
    if (!name) { return; }
    this.animalService.addAnimal({id, name, box } as Animal).subscribe(animal => {
        this.animalService.animals.push(animal);
      });
    console.log(this.animalService.animals);
  }

  getAnimals(): void {
    this.animalService.getAnimals().subscribe(animals => this.animalService.animals = animals);
  }

}
