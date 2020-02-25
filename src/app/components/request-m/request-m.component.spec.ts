import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMComponent } from './request-m.component';

describe('RequestMComponent', () => {
  let component: RequestMComponent;
  let fixture: ComponentFixture<RequestMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
