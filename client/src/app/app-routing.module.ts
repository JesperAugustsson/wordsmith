import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordReverseComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WordReverseComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
