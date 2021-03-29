import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleRoutingModule } from './title-routing.module';
import { TitleComponent } from './title.component';
import { ChoiceModule } from '../choice/choice.module';


@NgModule({
  declarations: [TitleComponent],
  imports: [
    CommonModule,
    TitleRoutingModule,
    ChoiceModule
  ]
})
export class TitleModule { }
