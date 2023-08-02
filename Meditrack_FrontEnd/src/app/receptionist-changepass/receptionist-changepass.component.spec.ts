import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistChangepassComponent } from './receptionist-changepass.component';

describe('ReceptionistChangepassComponent', () => {
  let component: ReceptionistChangepassComponent;
  let fixture: ComponentFixture<ReceptionistChangepassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionistChangepassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistChangepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
