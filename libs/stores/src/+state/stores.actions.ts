import { StoreLocation } from '@fishgoco-pwa/stores';

export interface LoadData {
  type: 'LOAD_STORE_LOCATIONS';
  payload: {};
}

export interface DataLoaded {
  type: 'STORE_LOCATIONS_LOADED';
  payload: StoreLocation[];
}

export type StoresAction = LoadData | DataLoaded;
