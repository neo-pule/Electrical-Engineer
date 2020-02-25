import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMDetailComponent } from './request-m-detail.component';

describe('RequestMDetailComponent', () => {
  let component: RequestMDetailComponent;
  let fixture: ComponentFixture<RequestMDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestMDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestMDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
