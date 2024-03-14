import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ICharacter } from 'src/app/pages/characters/interface/character.interface';

@Component({
  selector: 'app-character-popup',
  templateUrl: './character-popup.component.html',
  styleUrls: ['./character-popup.component.css', './character-popup.responsive.component.css']
})
export class CharacterPopupComponent {
  @Input() mostrar: boolean = false;
  @Output() ClosePopUp: EventEmitter<boolean> = new EventEmitter();
  @Input() characterData:any[] = [];

  open(): void {
    this.mostrar = true;
  }
  close(): void {
    this.mostrar = false;
    this.ClosePopUp.emit(false);
  }
}
