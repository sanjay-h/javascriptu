import { AfterViewInit, Component, OnInit } from '@angular/core';
import sdk from '@stackblitz/sdk'



@Component({
  selector: 'app-fundamentals',
  templateUrl: './fundamentals.component.html',
  styleUrls: ['./fundamentals.component.scss']
})
export class FundamentalsComponent implements OnInit, AfterViewInit {

  height:number = window.innerHeight;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    // sdk.embedProjectId(
    //   'elementOrId',
    //   'js-7dyprc',
    //   {
    //     openFile: 'index.html',
    //   }
    // );
  }

}
