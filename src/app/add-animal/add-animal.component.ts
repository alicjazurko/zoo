import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import "@angular/compiler";
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

  // animalForm: FormGroup;
  animals: Animal[];

 
  constructor(
    private animalService: AnimalService
  ) { }

  ngOnInit() {
    this.getAnimals();
    // this.initializeForm();
  }
  

  add(id, name: string, box: string): void {
    name = name.trim();
    id = this.animals.length;
    if (!name) { return; }
    this.animalService.addAnimal({id, name, box } as Animal).subscribe(animal => {
        this.animals.push(animal);
      });
      console.log(this.animals);
  }
  
  getAnimals(): void {
    this.animalService.getAnimals().subscribe(animals => this.animals = animals);
  }
  // onSubmit() {
    
  //   var tmp = {
  //     id: this.animalForm.value.animalId, 
  //     name: this.animalForm.value.animalName, 
  //     box: this.animalForm.value.animalBox
  //   }
  //   console.log(tmp);
  //   // this.animals.push(tmp);
  //   // console.log(this.animalForm);
  //   // console.log(this.animals, AnimalsList);
  //   this.onClear();
  // }
  // onClear() {
  //   this.animalForm.reset();
  // }

  // private initializeForm() {
  //   this.animalForm = new FormGroup({
  //     'animalId': new FormControl(null, [Validators.required, Validators.min(1)]),
  //     'animalBox': new FormControl(null, Validators.required),
  //     'animalName': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      
  //   });
  // }
  
}
