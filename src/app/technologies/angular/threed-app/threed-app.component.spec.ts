import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreedAppComponent } from './threed-app.component';

describe('ThreedAppComponent', () => {
  let component: ThreedAppComponent;
  let fixture: ComponentFixture<ThreedAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreedAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreedAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
