import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/title'},
  { path: 'title', loadChildren: () => import('./title/title.module').then(m => m.TitleModule) },
  { path: 'choice', loadChildren: () => import('./choice/choice.module').then(m => m.ChoiceModule) },
  { path: 'fundamentals', loadChildren: () => import('./fundamentals/fundamentals.module').then(m => m.FundamentalsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
