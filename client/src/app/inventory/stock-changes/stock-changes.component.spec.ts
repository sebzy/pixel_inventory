import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockChangesComponent } from './stock-changes.component';

describe('StockChangesComponent', () => {
  let component: StockChangesComponent;
  let fixture: ComponentFixture<StockChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
