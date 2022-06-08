import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { BlogAppComponent } from './angular/blog-app/blog-app.component';
import { OnlineTestAppComponent } from './angular/online-test-app/online-test-app.component';
import { TemplateComponent } from './main/template/template.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'template', component: TemplateComponent},
  {path:'fba', component: BlogAppComponent},
  {path:'ota', component: OnlineTestAppComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }