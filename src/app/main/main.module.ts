import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TemplateComponent } from './template/template.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { MessagesComponent } from './messages/messages.component';

// const  config: SocketIoConfig = { url: 'https://zvdas.github.io/', options: {} };
const config: SocketIoConfig = { url: 'http://localhost:5000/', options: {} };

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    TemplateComponent,
    AboutComponent,
    ErrorComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule,
    SocketIoModule.forRoot(config),
  ],
  exports: [
    NavbarComponent,
    TemplateComponent
  ]
})

export class MainModule { }