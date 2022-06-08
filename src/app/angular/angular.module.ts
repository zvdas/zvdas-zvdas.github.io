import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogAppComponent } from './blog-app/blog-app.component';
import { OnlineTestAppComponent } from './online-test-app/online-test-app.component';



@NgModule({
  declarations: [
    BlogAppComponent,
    OnlineTestAppComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AngularModule { }
