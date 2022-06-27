import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFinderAppComponent } from './event-finder-app.component';

describe('EventFinderAppComponent', () => {
  let component: EventFinderAppComponent;
  let fixture: ComponentFixture<EventFinderAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventFinderAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFinderAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
