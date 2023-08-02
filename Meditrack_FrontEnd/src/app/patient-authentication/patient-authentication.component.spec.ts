import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAuthenticationComponent } from './patient-authentication.component';

describe('PatientAuthenticationComponent', () => {
  let component: PatientAuthenticationComponent;
  let fixture: ComponentFixture<PatientAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientAuthenticationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
