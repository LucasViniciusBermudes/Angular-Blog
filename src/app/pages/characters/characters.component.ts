import { Component, OnInit } from '@angular/core';
import { characters } from 'src/app/data/Characters';
import { ICharacter } from './interface/character.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css', './characters.responsive.component.css']
})
export class CharactersComponent implements OnInit {
  characterData: ICharacter[] = []
  constructor() { }

  ngOnInit(): void {
    this.setValuesToComponent()
  }
  setValuesToComponent() {
    this.characterData = characters;
  }
}
