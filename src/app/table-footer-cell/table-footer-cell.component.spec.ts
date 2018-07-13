import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFooterCellComponent } from './table-footer-cell.component';

describe('TableFooterCellComponent', () => {
  let component: TableFooterCellComponent;
  let fixture: ComponentFixture<TableFooterCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFooterCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFooterCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
