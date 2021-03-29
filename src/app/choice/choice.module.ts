import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChoiceRoutingModule } from './choice-routing.module';
import { ChoiceComponent } from './choice.component';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';


@NgModule({
  declarations: [ChoiceComponent],
  imports: [
    CommonModule,
    ChoiceRoutingModule,
    AngularFullpageModule
  ], exports: [ChoiceComponent]
})
export class ChoiceModule { }
