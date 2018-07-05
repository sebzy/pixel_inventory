import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesComponentComponent } from './purchases-component.component';

describe('PurchasesComponentComponent', () => {
  let component: PurchasesComponentComponent;
  let fixture: ComponentFixture<PurchasesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
