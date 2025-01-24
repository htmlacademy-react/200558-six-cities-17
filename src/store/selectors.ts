import { TinitialState } from '../types/types';

export  const getOffersByCity = (state:TinitialState) => state.offers.filter(({city}) => city.name === state.city);
