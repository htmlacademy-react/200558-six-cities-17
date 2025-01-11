import { createReducer, configureStore } from '@reduxjs/toolkit';
import { offersCities } from './mocks/offers';
import { TReducer } from './types/types';
import { setSity } from './action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';

type TinitialState = {
  offers: TOffer[];
};
const initialState: TinitialState = {
  offers: offersCities['Amsterdam'],
};

// const reducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase('offers', (state, action) => ({...state, offers: offersCities[action.payload]}))
// });

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setSity, (state, { payload }): TReducer => {
    state.offers = offersCities[payload] || state.offers;
    return state;
  });
});

export const store = configureStore({ reducer });

type AppDispatch = typeof store.dispatch;
//const dispatch = store.dispatch;
const dispatch = () => useDispatch<AppDispatch>();
type TGetState = (state: TReducer) => any;
export const useAppSelector: TypedUseSelectorHook<TReducer> = useSelector;

export default dispatch;
