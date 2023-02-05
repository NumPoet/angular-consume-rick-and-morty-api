import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterInterface} from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  public characters: CharacterInterface[] = [];

  constructor(private http: HttpClient) { }

  getCharacters(): Promise<CharacterInterface[]> {

    if ( this.characters.length > 0) {
      return Promise.resolve(this.characters);
    }

    return new Promise( resolve => {

      this.http.get('https://rickandmortyapi.com/api/character/')
      .subscribe( (characters: any) =>  {

        console.log(characters.results);
        this.characters = characters.results;
        resolve( characters.results )
      });
    })
  }

  getCharacterById(id: number) {

    if (this.characters.length > 0)  {


      const character = this.characters.find( (c) => {
        return c.id === +id
      });
      return Promise.resolve( character );

    }

    return this.getCharacters().then( characters => {

      const character = this.characters.find( (c) => {
        return c.id === +id
      });
      return Promise.resolve( character );

    })



  }
}
