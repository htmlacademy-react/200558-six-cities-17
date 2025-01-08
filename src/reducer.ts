import { createReducer } from '@reduxjs/toolkit';
import {offersCities } from './mocks/offers';
import { TOffer } from './types/types';
import { setSity } from './action';

type TinitialState ={
  offers:TOffer[],
}
const initialState:TinitialState = {
  offers: offersCities['Amsterdam'],
};

type TReducer={offers:TOffer[]};

// const reducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase('offers', (state, action) => ({...state, offers: offersCities[action.payload]}))
// });

export default createReducer(initialState, (builder)=>{
  builder.addCase(setSity,(state,{payload}):TReducer=>({...state,offers: offersCities[payload]}));
});
