import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginReceptComponent } from './login-recept.component';

describe('LoginReceptComponent', () => {
  let component: LoginReceptComponent;
  let fixture: ComponentFixture<LoginReceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginReceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginReceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
