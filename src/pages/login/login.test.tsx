import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { AppRoutes } from '../../app/app';
import { api } from '../../api';
import { Address, NameReducer, Token } from '../../data/constant';
import { userInitialState, userSlice } from '../../store/userSlice/userSlice';
import type { IResLogin } from '../../types/types';
import axios from 'axios';
import { store } from '../../store/index.ts';

const LOGIN_URL = 'https://16.design.htmlacademy.pro/six-cities/login';

const loginResponse: IResLogin = {
  avatarUrl: 'https://example.com/avatar.jpg',
  email: 'dmitri@mail.ru',
  isPro: true,
  name: 'Dmitri',
  token: 'test-token-abc',
};

function createTestStore() {
  return configureStore({
    reducer: combineReducers({
      [NameReducer.user]: userSlice.reducer,
    }),
  });
}

function renderLogin() {
  //const store = createTestStore();

  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[Address.login]}>
        <AppRoutes/>
      </MemoryRouter>
    </Provider>,
  );

  return store;
}

describe('Login page', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
    Token.delete();
  });

  afterEach(() => {
    mock.restore();
    Token.delete();
  });

  it('sets token, navigates to main and updates store on form submit', async () => {
    const user = userEvent.setup();
    mock.onPost(LOGIN_URL).reply(200, loginResponse);

    const store = renderLogin();

    expect(Token.value).toBeNull();
    expect(store.getState()[NameReducer.user]).toEqual(userInitialState);

    await user.click(document.querySelector('.form__submit')!);

    await waitFor(() => {
      expect(Token.value).toBe(loginResponse.token);
    });

    expect(screen.getByTestId('main-page')).toBeInTheDocument();
    expect(store.getState()[NameReducer.user]).toEqual(loginResponse);
  });
});
