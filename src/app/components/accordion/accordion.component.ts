import { Component, Input, OnInit } from '@angular/core';
import { Icuriosity } from 'src/app/pages/more/interface/curiosities.interface';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css' , './accordion.responsive.component.css']
})
export class AccordionComponent implements OnInit {
  @Input()curiosities!:Icuriosity[];
  ngOnInit(): void {}

  onClick(curiosity: Icuriosity) {
    console.log(curiosity);
  }
}
