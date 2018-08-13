import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropCalcComponent } from './prop-calc.component';

describe('PropCalcComponent', () => {
  let component: PropCalcComponent;
  let fixture: ComponentFixture<PropCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
