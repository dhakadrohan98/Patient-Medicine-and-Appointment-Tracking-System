import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMedicalRComponent } from './patient-medical-r.component';

describe('PatientMedicalRComponent', () => {
  let component: PatientMedicalRComponent;
  let fixture: ComponentFixture<PatientMedicalRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientMedicalRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientMedicalRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
