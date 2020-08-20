import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';
import { AddAnimalComponent } from '../add-animal/add-animal.component';


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  // selectedAnimal: Animal;
  animals: Animal[];

  constructor(private animalService: AnimalService) {
    this.animals = [];
   }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.animals = this.animalService.animals;
  }

  // getAnimals(): void {
  //   this.animalService.getAnimals().subscribe(animals => this.animalService.animals = animals);
  // }


  delete(animal: Animal): void {
    this.animalService.animals = this.animalService.animals.filter(a => a !== animal);
    this.animalService.deleteAnimal(animal).subscribe();
  }

}


