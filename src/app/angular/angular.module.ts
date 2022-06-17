import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogAppComponent } from './blog-app/blog-app.component';
import { OnlineTestAppComponent } from './online-test-app/online-test-app.component';
import { MainModule } from '../main/main.module';
import { ThreedAppComponent } from './threed-app/threed-app.component';



@NgModule({
  declarations: [
    BlogAppComponent,
    OnlineTestAppComponent,
    ThreedAppComponent
  ],
  imports: [
    CommonModule,
    MainModule
  ]
})
export class AngularModule { }
