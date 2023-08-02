import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatChangePasswordComponent } from './pat-change-password.component';

describe('PatChangePasswordComponent', () => {
  let component: PatChangePasswordComponent;
  let fixture: ComponentFixture<PatChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatChangePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
