import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main/about/about.component';
import { HomeComponent } from './main/home/home.component';
import { TemplateComponent } from './main/template/template.component';
import { BlogAppComponent } from './technologies/angular/blog-app/blog-app.component';
import { OnlineTestAppComponent } from './technologies/angular/online-test-app/online-test-app.component';
import { ThreedAppComponent } from './technologies/angular/threed-app/threed-app.component';
import { LmsAppComponent } from './technologies/nodejs/lms-app/lms-app.component';
import { OnlineMusicLibraryAppComponent } from './technologies/nodejs/online-music-library-app/online-music-library-app.component';
import { EventFinderAppComponent } from './technologies/react/event-finder-app/event-finder-app.component';
import { PokemonSearchAppComponent } from './technologies/react/pokemon-search-app/pokemon-search-app.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'template', component: TemplateComponent},
  {path:'fba', component: BlogAppComponent},
  {path:'ota', component: OnlineTestAppComponent},
  {path:'tma', component: ThreedAppComponent},
  {path:'efa', component: EventFinderAppComponent},
  {path: 'psa', component: PokemonSearchAppComponent},
  {path:'lms', component: LmsAppComponent},
  {path:'oml', component: OnlineMusicLibraryAppComponent},
  {path:'about', component: AboutComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }