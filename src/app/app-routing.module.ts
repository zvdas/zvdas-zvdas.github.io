import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { BlogAppComponent } from './angular/blog-app/blog-app.component';
import { OnlineTestAppComponent } from './angular/online-test-app/online-test-app.component';
import { TemplateComponent } from './main/template/template.component';
import { EventFinderAppComponent } from './react/event-finder-app/event-finder-app.component';
import { PokemonSearchAppComponent } from './react/pokemon-search-app/pokemon-search-app.component';
import { ThreedAppComponent } from './angular/threed-app/threed-app.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'template', component: TemplateComponent},
  {path:'fba', component: BlogAppComponent},
  {path:'ota', component: OnlineTestAppComponent},
  {path:'tma', component: ThreedAppComponent},
  {path:'efa', component: EventFinderAppComponent},
  {path: 'psa', component: PokemonSearchAppComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }