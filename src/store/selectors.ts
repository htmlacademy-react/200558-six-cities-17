import { TInitialState } from '../types/types';
import { useAppSelector } from './reducer';

export const useOffersByCity = () =>
  useAppSelector((state) =>
    state.offersСities[state.city]
  );

export const useOffersСities = () => (state: TInitialState) => state.offersСities;
