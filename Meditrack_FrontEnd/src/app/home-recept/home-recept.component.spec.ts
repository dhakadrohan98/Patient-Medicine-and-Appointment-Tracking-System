import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeReceptComponent } from './home-recept.component';

describe('HomeReceptComponent', () => {
  let component: HomeReceptComponent;
  let fixture: ComponentFixture<HomeReceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeReceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeReceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
