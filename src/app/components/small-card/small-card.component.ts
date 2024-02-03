import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover:string = "";
  @Input()
  contentTitle:string = "";
  @Input()
  contentDescription:string = "";
  @Input()
  contentDate:string = "";
  @Input()
  id:string="";
  @Input()
  contentNews:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
