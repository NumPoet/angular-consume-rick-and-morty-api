import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class charactersService {

  constructor(private http: HttpClient) { }

  getCharacters() {
    this.http.get('https://rickandmortyapi.com/api/character')
    .subscribe(characters => {

    })
  }
}
