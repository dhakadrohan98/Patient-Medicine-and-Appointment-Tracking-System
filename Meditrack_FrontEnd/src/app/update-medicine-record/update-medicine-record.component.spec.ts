import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMedicineRecordComponent } from './update-medicine-record.component';

describe('UpdateMedicineRecordComponent', () => {
  let component: UpdateMedicineRecordComponent;
  let fixture: ComponentFixture<UpdateMedicineRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMedicineRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMedicineRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
