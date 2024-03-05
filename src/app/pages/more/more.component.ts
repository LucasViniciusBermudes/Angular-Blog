import { Component, OnInit } from '@angular/core';
import { curiosity } from 'src/app/data/curiosities';
import { Icuriosity } from './interface/curiosities.interface';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
curiosity: Icuriosity[]=[];

  constructor() { }

  ngOnInit(): void {
    this.setValuesToComponent()
  }
  setValuesToComponent() {
    this.curiosity = curiosity;
  }

}
