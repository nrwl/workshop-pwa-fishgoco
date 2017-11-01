import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCartButtonComponent } from './add-to-cart-button/add-to-cart-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AddToCartButtonComponent],
  exports: [AddToCartButtonComponent]
})
export class AddToCartModule {}
