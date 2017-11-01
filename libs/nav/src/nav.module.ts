import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav/main-nav.component';
import { RouterModule } from '@angular/router';
import { CartSummaryModule } from '@fishgoco-pwa/cart-summary';

@NgModule({
  imports: [CommonModule, RouterModule, CartSummaryModule],
  declarations: [MainNavComponent],
  exports: [MainNavComponent]
})
export class NavModule {}
