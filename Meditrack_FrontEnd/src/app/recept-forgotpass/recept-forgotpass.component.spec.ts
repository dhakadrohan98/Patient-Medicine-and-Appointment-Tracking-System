import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptForgotpassComponent } from './recept-forgotpass.component';

describe('ReceptForgotpassComponent', () => {
  let component: ReceptForgotpassComponent;
  let fixture: ComponentFixture<ReceptForgotpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptForgotpassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptForgotpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
