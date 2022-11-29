/*© 2022 Bollywood Game
Author : Rutuja K Gholap
File Info : This file is added to add all third party modules used in project
*/

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [],
  imports: [
    InputTextModule,
    ButtonModule,
    MessageModule,
    MessagesModule,
    ToastModule,
    DialogModule,
    MenubarModule,
  ],
  exports: [
    InputTextModule,
    ButtonModule,
    MessageModule,
    MessagesModule,
    ToastModule,
    DialogModule,
    MenubarModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ThirdPartyModule { }
