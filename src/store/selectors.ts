import { TinitialState } from '../types/types';
import { useAppSelector } from './reducer';

export const getOffersByCity = () =>
  useAppSelector((state: TinitialState) =>
    state.offers.filter(({ city }) => city.name === state.city)
  );
