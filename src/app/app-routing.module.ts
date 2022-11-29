/*© 2022 Bollywood Game
Author : Rutuja K Gholap
File Info : 
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainScreenComponent } from './module-game/main-screen/main-screen.component';

const routes: Routes = [
  {path : '' , component: MainScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
