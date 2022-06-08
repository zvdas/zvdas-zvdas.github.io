import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularModule } from './angular/angular.module';
import { MainModule } from './main/main.module';
import { ReactModule } from './react/react.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularModule,
    MainModule,
    ReactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
