import { Component, OnInit } from '@angular/core';
import { CharacterInterface } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: any[] = [];

  constructor(public characterService: CharactersService) {

  }

  ngOnInit() {

    this.characterService.getCharacters()
    .then( characters => this.characters = characters)

  }

}
