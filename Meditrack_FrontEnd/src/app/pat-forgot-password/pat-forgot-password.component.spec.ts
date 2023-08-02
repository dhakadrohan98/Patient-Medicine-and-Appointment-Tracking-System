import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatForgotPasswordComponent } from './pat-forgot-password.component';

describe('PatForgotPasswordComponent', () => {
  let component: PatForgotPasswordComponent;
  let fixture: ComponentFixture<PatForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatForgotPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
