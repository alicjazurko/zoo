import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  selectedAnimal: Animal;
  animals: Animal[];

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.getAnimals();
  }

  getAnimals(): void {
    this.animalService.getAnimals().subscribe(animals => this.animals = animals);
  }

  delete(animal: Animal): void {
    this.animals = this.animals.filter(a => a !== animal);
    this.animalService.deleteAnimal(animal).subscribe();
  }
}


