import { Component, OnInit, Input } from '@angular/core';
import { ICharacter } from 'src/app/pages/characters/interface/character.interface';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {
  @Input()characters!:ICharacter[];
  mostrar: boolean = false;
  characterData: any [] = [];

  constructor() {}

  ngOnInit(): void {}

  cardClick(character: ICharacter) {
    this.mostrar=true;
    this.characterData = [character];
    console.log(this.characterData);
  }

  fecharPopUp(event: boolean) {
    this.mostrar = event;
  }
}
