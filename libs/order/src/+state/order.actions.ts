import { MenuItem } from '@fishgoco-pwa/order';

export interface LoadData {
  type: 'LOAD_MENU_ITEMS';
  payload: {};
}

export interface DataLoaded {
  type: 'MENU_ITEMS_LOADED';
  payload: MenuItem[];
}

export type OrderAction = LoadData | DataLoaded;
