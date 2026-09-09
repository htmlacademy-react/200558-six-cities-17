import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Address } from '../data/constant';
import { AppRoutes } from './app';

const {
  mockMain,
  mockLogin,
  mockFavorites,
  mockOffer,
  mockErrorAddressing,
  mockUseEmail,
} = vi.hoisted(() => ({
  mockMain: vi.fn(() => <div data-testid="main-page" />),
  mockLogin: vi.fn(() => <div data-testid="login-page" />),
  mockFavorites: vi.fn(() => <div data-testid="favorites-page" />),
  mockOffer: vi.fn(() => <div data-testid="offer-page" />),
  mockErrorAddressing: vi.fn(() => <div data-testid="error-page" />),
  mockUseEmail: vi.fn(),
}));

vi.mock('../pages/main/main', () => ({ default: mockMain }));
vi.mock('../pages/login/login', () => ({ default: mockLogin }));
vi.mock('../pages/favorites/favorites', () => ({ default: mockFavorites }));
vi.mock('../pages/offer/offer', () => ({ default: mockOffer }));
vi.mock('../pages/error-addressing/error-addressing', () => ({
  default: mockErrorAddressing,
}));
vi.mock('../store/useSelectors', () => ({
  useEmail: () => mockUseEmail(),
}));

function renderAppRoutes(initialEntry: string = "") {
  render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <AppRoutes />
    </MemoryRouter>,
  );
}

describe('AppRoutes', () => {
  beforeEach(() => {
    mockMain.mockClear();
    mockLogin.mockClear();
    mockFavorites.mockClear();
    mockOffer.mockClear();
    mockErrorAddressing.mockClear();
    mockUseEmail.mockReset();
    mockUseEmail.mockReturnValue('');
  });

  it.each<[string, string]>([
    [Address.main, 'main-page'],
    [Address.login, 'login-page'],
    ['/offer/42', 'offer-page'],
    ['/unknown-path', 'error-page'],
  ])('renders matching page for url %s', (url, testId) => {
    renderAppRoutes(url);

    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  describe('favorites private route', () => {
    it('renders Favorites when email is present', () => {
      mockUseEmail.mockReturnValue('user@test.com');

      renderAppRoutes(Address.favorites);

      expect(screen.getByTestId('favorites-page')).toBeInTheDocument();
      expect(screen.queryByTestId('login-page')).not.toBeInTheDocument();
    });

    it('redirects to Login when email is empty', () => {
      mockUseEmail.mockReturnValue('');

      renderAppRoutes(Address.favorites);

      expect(screen.getByTestId('login-page')).toBeInTheDocument();
      expect(screen.queryByTestId('favorites-page')).not.toBeInTheDocument();
    });
  });
});
