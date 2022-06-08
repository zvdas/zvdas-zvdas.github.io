import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TemplateComponent } from './template/template.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    TemplateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class MainModule { }
