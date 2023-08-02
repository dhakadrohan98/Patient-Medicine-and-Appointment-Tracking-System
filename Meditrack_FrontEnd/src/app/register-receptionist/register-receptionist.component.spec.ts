import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterReceptionistComponent } from './register-receptionist.component';

describe('RegisterReceptionistComponent', () => {
  let component: RegisterReceptionistComponent;
  let fixture: ComponentFixture<RegisterReceptionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterReceptionistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterReceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
