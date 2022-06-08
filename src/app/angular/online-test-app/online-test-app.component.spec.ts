import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineTestAppComponent } from './online-test-app.component';

describe('OnlineTestAppComponent', () => {
  let component: OnlineTestAppComponent;
  let fixture: ComponentFixture<OnlineTestAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineTestAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineTestAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
