import { Stores } from './stores.interfaces';
import { StoresAction } from './stores.actions';

export function storesReducer(state: Stores, action: StoresAction): Stores {
  switch (action.type) {
    case 'STORE_LOCATIONS_LOADED': {
      return { ...state, storeLocations: action.payload };
    }
    default: {
      return state;
    }
  }
}
