import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineMusicLibraryAppComponent } from './online-music-library-app.component';

describe('OnlineMusicLibraryAppComponent', () => {
  let component: OnlineMusicLibraryAppComponent;
  let fixture: ComponentFixture<OnlineMusicLibraryAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineMusicLibraryAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineMusicLibraryAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
