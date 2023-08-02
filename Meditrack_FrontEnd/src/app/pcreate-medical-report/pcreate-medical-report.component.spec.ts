import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PCreateMedicalReportComponent } from './pcreate-medical-report.component';

describe('PCreateMedicalReportComponent', () => {
  let component: PCreateMedicalReportComponent;
  let fixture: ComponentFixture<PCreateMedicalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCreateMedicalReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PCreateMedicalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
