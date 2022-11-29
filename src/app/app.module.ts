/*© 2022 Bollywood Game
Author : Rutuja K Gholap
File Info : App Module TS file.
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThirdPartyModule } from './third-party/third-party.module';
import { MainScreenComponent } from './module-game/main-screen/main-screen.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent, MainScreenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ThirdPartyModule,
    FormsModule,
  ],
  exports: [
    SharedModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
