import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  height:number = window.innerHeight;

  constructor() { }

  ngOnInit(): void {
    console.log(this.height);

  }

}
