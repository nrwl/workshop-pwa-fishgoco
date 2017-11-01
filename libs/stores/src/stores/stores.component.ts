import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { StoresState, StoreLocation } from '@fishgoco-pwa/stores';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {
  storeLocations$: Observable<StoreLocation[]>;

  constructor(private store: Store<StoresState>) {}

  ngOnInit() {
    this.storeLocations$ = this.store
      .select(s => s.stores.storeLocations)
      .map(i => i.sort((a, b) => a.distanceAway - b.distanceAway));
  }
}
