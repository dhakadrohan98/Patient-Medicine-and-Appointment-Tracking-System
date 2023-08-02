import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAuthenticationKeyComponent } from './patient-authentication-key.component';

describe('PatientAuthenticationKeyComponent', () => {
  let component: PatientAuthenticationKeyComponent;
  let fixture: ComponentFixture<PatientAuthenticationKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientAuthenticationKeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAuthenticationKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
