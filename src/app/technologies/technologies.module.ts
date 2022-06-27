import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModule } from '../main/main.module';
import { BlogAppComponent } from './angular/blog-app/blog-app.component';
import { OnlineTestAppComponent } from './angular/online-test-app/online-test-app.component';
import { ThreedAppComponent } from './angular/threed-app/threed-app.component';
import { EventFinderAppComponent } from './react/event-finder-app/event-finder-app.component';
import { PokemonSearchAppComponent } from './react/pokemon-search-app/pokemon-search-app.component';
import { LmsAppComponent } from './nodejs/lms-app/lms-app.component';
import { OnlineMusicLibraryAppComponent } from './nodejs/online-music-library-app/online-music-library-app.component';

@NgModule({
  declarations: [
    BlogAppComponent,
    OnlineTestAppComponent,
    ThreedAppComponent,
    EventFinderAppComponent,
    PokemonSearchAppComponent,
    LmsAppComponent,
    OnlineMusicLibraryAppComponent
  ],
  imports: [
    CommonModule,
    MainModule
  ]
})

export class TechnologiesModule { }