import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PUpdateMedicalReportComponent } from './pupdate-medical-report.component';

describe('PUpdateMedicalReportComponent', () => {
  let component: PUpdateMedicalReportComponent;
  let fixture: ComponentFixture<PUpdateMedicalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PUpdateMedicalReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PUpdateMedicalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
