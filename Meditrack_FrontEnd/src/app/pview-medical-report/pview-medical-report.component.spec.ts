import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PViewMedicalReportComponent } from './pview-medical-report.component';

describe('PViewMedicalReportComponent', () => {
  let component: PViewMedicalReportComponent;
  let fixture: ComponentFixture<PViewMedicalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PViewMedicalReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PViewMedicalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
