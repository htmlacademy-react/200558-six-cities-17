import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import Favorites from './favorites';
import { api } from '../../api';
import { NameReducer } from '../../data/constant';
import { offersSlice } from '../../store/offersSlice/offersSlice';
import { userSlice } from '../../store/userSlice/userSlice';
import { offers } from '../../mocks/offers';
import type { TOffers } from '../../types/types';

const { mockCards } = vi.hoisted(() => ({
  mockCards: vi.fn(() => <div data-testid="cards-mock" />),
}));

vi.mock('../../components/cards/cards', () => ({
  default: mockCards,
}));

const parisFavorite: TOffers = {
  ...offers.find((offer) => offer.city.name === 'Paris')!,
  id: 'fav-paris-1',
  isFavorite: true,
};

const cologneFavorite: TOffers = {
  ...offers.find((offer) => offer.city.name === 'Cologne')!,
  id: 'fav-cologne-1',
  isFavorite: true,
};

const favoriteOffers = [parisFavorite, cologneFavorite];
/** Групп городов с избранным столько же, сколько вызовов Cards и `.favorites__locations-items`. */
const favoriteCityGroupsCount = favoriteOffers.length;

const headingLoading = () => screen.queryByRole('heading', { name: 'Loading' });
const getPageMain = () => document.querySelector('.page__main--favorites');

function createTestStore() {
  return configureStore({
    reducer: combineReducers({
      [NameReducer.user]: userSlice.reducer,
      [NameReducer.offers]: offersSlice.reducer,
    }),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: api,
        },
      }),
  });
}

function renderFavorites() {
  const store = createTestStore();

  render(
    <Provider store={store}>
      <MemoryRouter>
        <Favorites />
      </MemoryRouter>
    </Provider>,
  );

  return store;
}

describe('Favorites page', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(api);
    mockCards.mockClear();
  });

  afterEach(() => {
    mock.restore();
  });

  it('renders Loading while favorites are fetching', async () => {
    mock.onGet('favorite').reply(
      () =>
        new Promise((resolve) => {
          setTimeout(() => resolve([200, favoriteOffers]), 100);
        }),
    );

    renderFavorites();

    expect(headingLoading()).toBeInTheDocument();
    expect(getPageMain()).not.toBeInTheDocument();

    await waitFor(() => {
      expect(getPageMain()).toBeInTheDocument();
    });

    expect(headingLoading()).not.toBeInTheDocument();
  });

  it('renders main with Cards and location items after favorites are loaded', async () => {
    mock.onGet('favorite').reply(200, favoriteOffers);

    renderFavorites();

    await waitFor(() => {
      expect(getPageMain()).toBeInTheDocument();
    });

    expect(headingLoading()).not.toBeInTheDocument();
    expect(mockCards).toHaveBeenCalledTimes(favoriteCityGroupsCount);
    expect(document.querySelectorAll('.favorites__locations-items')).toHaveLength(
      favoriteCityGroupsCount,
    );
  });
  it('renders main with Cards and location items after favorites are loaded', async () => {
    mock.onGet('favorite').reply(200, favoriteOffers);
    renderFavorites();

    await waitFor(() => {
      expect(getPageMain()).toBeInTheDocument();
    });
    
    favoriteOffers.forEach((el,i)=>{
      const propOffers = mockCards.mock.calls[i][0].offers;
      console.log('propOffers=', propOffers);
      expect(propOffers).toEqual([el]);
    });
  });
});
