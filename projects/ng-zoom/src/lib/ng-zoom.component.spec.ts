import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgZoomComponent } from './ng-zoom.component';

describe('NgZoomComponent', () => {
  let component: NgZoomComponent;
  let fixture: ComponentFixture<NgZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgZoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
