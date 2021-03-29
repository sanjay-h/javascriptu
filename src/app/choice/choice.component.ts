import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit {

  config: any;
  fullpage_api: any;

  strikeText:boolean = false;
  constructor() {

  }


  ngOnInit(): void {
  }

}
