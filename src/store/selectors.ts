import { useAppSelector } from './reducer';

export const useOffersByCity = () =>
  useAppSelector((state) =>
    state.offers.filter(({ city }) => city.name === state.city)
  );
