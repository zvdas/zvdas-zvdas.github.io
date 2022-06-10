import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModule } from '../main/main.module';
import { EventFinderAppComponent } from './event-finder-app/event-finder-app.component';
import { PokemonSearchAppComponent } from './pokemon-search-app/pokemon-search-app.component';

@NgModule({
  declarations: [
    EventFinderAppComponent,
    PokemonSearchAppComponent
  ],
  imports: [
    CommonModule,
    MainModule
  ]
})

export class ReactModule { }