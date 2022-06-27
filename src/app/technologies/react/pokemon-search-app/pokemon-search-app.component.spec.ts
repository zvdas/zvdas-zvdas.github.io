import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSearchAppComponent } from './pokemon-search-app.component';

describe('PokemonSearchAppComponent', () => {
  let component: PokemonSearchAppComponent;
  let fixture: ComponentFixture<PokemonSearchAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonSearchAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSearchAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
