import { Component, OnInit, Input } from '@angular/core';
import { ICharacter } from 'src/app/pages/characters/interface/character.interface';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {
  @Input()characters!:ICharacter[];
  constructor() { }

  ngOnInit(): void {
  }

}
