import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistDetailsComponent } from './receptionist-details.component';

describe('ReceptionistDetailsComponent', () => {
  let component: ReceptionistDetailsComponent;
  let fixture: ComponentFixture<ReceptionistDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionistDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
