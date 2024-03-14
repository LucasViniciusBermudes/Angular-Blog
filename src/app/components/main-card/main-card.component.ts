import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css', './main-card.responsive.component.css']
})
export class MainCardComponent implements OnInit {
  @Input()
  photoCover:string = "";
  @Input()
  contentTitle:string = "";
  @Input()
  contentDescription:string = "";
  @Input()
  contentDate:string = "";
  @Input()
  contentNews:string = "";
  @Input()
  id: string = "0"
  constructor() { }

  ngOnInit(): void {
  }

}
