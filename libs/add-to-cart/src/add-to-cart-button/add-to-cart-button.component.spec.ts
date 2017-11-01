import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartButtonComponent } from './add-to-cart-button.component';

describe('AddToCartButtonComponent', () => {
  let component: AddToCartButtonComponent;
  let fixture: ComponentFixture<AddToCartButtonComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AddToCartButtonComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
