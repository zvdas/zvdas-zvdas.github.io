import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsAppComponent } from './lms-app.component';

describe('LmsAppComponent', () => {
  let component: LmsAppComponent;
  let fixture: ComponentFixture<LmsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmsAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
