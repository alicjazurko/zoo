import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Animal } from './animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private animalsUrl = 'api/animals';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient,
    

  ) { }

  getAnimals(): Observable<Animal[]> { 
    return this.http.get<Animal[]>(this.animalsUrl).pipe(
      catchError(this.handleError<Animal[]>('getAnimals', []))
    );
  }

  getAnimal(id: number): Observable<Animal> {
    const url = `${this.animalsUrl}/${id}`;
    return this.http.get<Animal>(url).pipe(
      catchError(this.handleError<Animal>(`getAnimal id=${id}`))
    );
  }

  updateAnimal(animal: Animal): Observable<any> {
    return this.http.put(this.animalsUrl, animal, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateAnimal'))
    );
  }

  addAnimal(animal: Animal): Observable<Animal> {
    return this.http.post<Animal>(this.animalsUrl, animal, this.httpOptions).pipe(
      catchError(this.handleError<Animal>('addAnimal'))
    );
  }

  deleteAnimal(animal: Animal | number): Observable<Animal> {
    const id = typeof animal === 'number' ? animal : animal.id;
    const url = `${this.animalsUrl}/${id}`;

    return this.http.delete<Animal>(url, this.httpOptions).pipe(
      catchError(this.handleError<Animal>('deleteAnimal'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }

  
}
