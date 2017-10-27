export interface StoreLocation {
  name: string;
  city: string;
  distanceAway: number;
}

export interface Stores {
  storeLocations: StoreLocation[];
}

export interface StoresState {
  readonly stores: Stores;
}
