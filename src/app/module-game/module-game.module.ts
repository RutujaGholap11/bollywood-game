/*© 2022 Bollywood Game
Author : Rutuja K Gholap
File Info :  Module Game TS File
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { ThirdPartyModule } from '../third-party/third-party.module';
import { SharedModule } from 'primeng/api';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainScreenComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ThirdPartyModule,
    FormsModule
  ],
  exports: [ MainScreenComponent ]
})
export class ModuleGameModule { }
