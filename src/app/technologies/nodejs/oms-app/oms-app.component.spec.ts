import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmsAppComponent } from './oms-app.component';

describe('OmsAppComponent', () => {
  let component: OmsAppComponent;
  let fixture: ComponentFixture<OmsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmsAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
