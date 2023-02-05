import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterInterface } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character: CharacterInterface={
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: undefined,
    location: undefined,
    image: '',
    episode: [],
    url: '',
    created: ''
  };

  constructor(
    public charactersService: CharactersService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

    ngOnInit(): void {

      const id: any = this.activatedRoute.snapshot.paramMap.get('id');

      this.charactersService.getCharacterById( id ).then( character => {
        console.log(character)
        if (!character) {
          return this.router.navigateByUrl('/');
        }


       this.character = character;

      });
    }

}
