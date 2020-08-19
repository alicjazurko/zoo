import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  animalForm: FormGroup;
  // animals: Animal[];

 
  constructor(public animals: Animal[]) { }

  ngOnInit() {
    this.initializeForm();
  }
  onSubmit() {
    
    var tmp = {
      id: this.animalForm.value.animalId, 
      name: this.animalForm.value.animalName, 
      box: this.animalForm.value.animalBox
    }
    console.log(tmp);
    this.animals.add(tmp);
    // console.log(this.animalForm);
    // console.log(this.animals, AnimalsList);
    this.onClear();
  }
  onClear() {
    this.animalForm.reset();
  }

  

  private initializeForm() {
    this.animalForm = new FormGroup({
      'animalId': new FormControl(null, [Validators.required, Validators.min(1)]),
      'animalBox': new FormControl(null, Validators.required),
      'animalName': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      
    });
  }
  
  addAnimalToList(){
    // FUNKCJA PRZEKAZUJE DANE DO TABLICY
    // var a = this.animalForm.value.animalId 

    var tmp = {
      id: this.animalForm.value.animalId, 
      name: this.animalForm.value.animalName, 
      box: this.animalForm.value.animalBox
    }
    console.log(tmp);

    // this.animals.push(
    //   tmp
    //  )
    // console.log(this.animalForm.value.animalId, this.animalForm.value.animalName, this.animalForm.value.animalBox)
    //   console.log(this.animals);

      this.onClear();
  }

  
  


}
