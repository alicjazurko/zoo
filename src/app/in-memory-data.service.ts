import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const animals = [
      { id: 1, name: 'Słoń', box: 'ssaki'  },
      { id: 2, name: 'Nosorożec', box: 'ssaki' },
      { id: 3, name: 'Lew', box: 'ssaki' },
      { id: 4, name: 'Sowa', box: 'ptaki' },
      { id: 5, name: 'Hipopotam', box: 'ssaki' },
      { id: 6, name: 'Papuga', box: 'ptaki' },
      { id: 7, name: 'Kapucynka', box: 'ssaki' },
      { id: 8, name: 'Foka', box: 'ssaki' },
      { id: 9, name: 'Płaszczka', box: 'ryby' },
      { id: 10, name: 'Kameleon', box: 'gady' }
    ];
    return {animals};
  }
  // genId(animals: Animal[]): number {
  //   return animals.length > 0 ? Math.max(...animals.map(animal => animal.id)) + 1 : 11;
  // }
  constructor() { }
}
