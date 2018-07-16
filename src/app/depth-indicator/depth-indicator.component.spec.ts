import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepthIndicatorComponent } from './depth-indicator.component';

describe('DepthIndicatorComponent', () => {
  let component: DepthIndicatorComponent;
  let fixture: ComponentFixture<DepthIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepthIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepthIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
