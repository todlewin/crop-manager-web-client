import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFooterRowComponent } from './table-footer-row.component';

describe('TableFooterRowComponent', () => {
  let component: TableFooterRowComponent;
  let fixture: ComponentFixture<TableFooterRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFooterRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFooterRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
