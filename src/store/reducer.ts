import { createReducer, configureStore } from '@reduxjs/toolkit';
import { offersCities } from '../mocks/offers';
import { TReducer, TOffer, TCity } from '../types/types';
import { setCity } from './action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { offers } from '../mocks/offers';
import { TinitialState } from '../types/types';

const initialState: TinitialState = {
  offers: offers,
  city: 'Paris',
};

// const reducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase('offers', (state, action) => ({...state, offers: offersCities[action.payload]}))
// });

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setCity, (state, { payload }) => {
    state.city = payload;
    return state;
  });
});

export const store = configureStore({ reducer });

type AppDispatch = typeof store.dispatch;
//const dispatch = store.dispatch;
const dispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TinitialState> = useSelector;

export default dispatch;
