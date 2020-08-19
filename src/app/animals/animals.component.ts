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

  selectedAnimal: Animal;
  animals: Animal[];

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.getAnimals();
  }

  getAnimals(): void {
    this.animalService.getAnimals().subscribe(animals => this.animals = animals);
  }

  add(id: number, name: string, box: string): void {
    
    this.animalService.addAnimal({ id, name, box } as Animal)
      .subscribe(animal => {
        this.animals.push(animal);
      });
  }
  delete(animal: Animal): void {
    this.animals = this.animals.filter(a => a !== animal);
    this.animalService.deleteAnimal(animal).subscribe();
  }

  // addAnimalToList(animal: Animal): void {
  //   this.animals = this.animals.push(animal);

  // }
}


