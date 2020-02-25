import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAppComponent } from './request-app.component';

describe('RequestAppComponent', () => {
  let component: RequestAppComponent;
  let fixture: ComponentFixture<RequestAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
