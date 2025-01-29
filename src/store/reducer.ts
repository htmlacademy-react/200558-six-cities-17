import { createReducer, configureStore } from '@reduxjs/toolkit';
import { setCity } from './action';
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { offers } from '../mocks/offers';
import { TInitialState } from '../types/types';

const initialState: TInitialState = {
  offers: offers,
  city: 'Paris',
  offersСities: {},
};

// const reducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase('offers', (state, action) => ({...state, offers: offersCities[action.payload]}))
// });

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setCity, (state, { payload }) => {
    state.city = payload;
    state.offers.forEach((offer) => {
      const city = offer.city.name;
      const offersСities = state.offersСities;
      if (!offersСities[city]) {
        offersСities[city] = [];
      }
      offersСities[city].push(offer);
    });
    return state;
  });
});

export const store = configureStore({ reducer });

export const useAppSelector: TypedUseSelectorHook<TInitialState> = useSelector;
