import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarRecepComponent } from './nav-bar-recep.component';

describe('NavBarRecepComponent', () => {
  let component: NavBarRecepComponent;
  let fixture: ComponentFixture<NavBarRecepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarRecepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarRecepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
