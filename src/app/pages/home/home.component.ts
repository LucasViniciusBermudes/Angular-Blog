import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', 'home.responsive.component.css']
})
export class HomeComponent implements OnInit {
  result: {
    idContent: string | undefined,
    photoCover: string | undefined,
    contentTitle: string | undefined,
    contentDescription: string | undefined,
    contentDate: string | undefined,
    contentNews: string | undefined,
  }[] = [];
  constructor() { }

  ngOnInit(): void {
    this.setValuesToComponent()
  }
  setValuesToComponent() {
    dataFake.forEach((item) => {
      this.result.push({
        idContent: item.id,
        photoCover: item.photo,
        contentTitle: item.title,
        contentDescription: item.description,
        contentDate: item.date,
        contentNews: item.news,
      });
    });
  }
}
