import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { Address, PrivateStatus } from '../../data/constant';
import PrivateRoute from './private-route';

function renderPrivateRoute(status: PrivateStatus) {
  render(
    <MemoryRouter initialEntries={['/private']}>
      <Routes>
        <Route
          path="/private"
          element={
            <PrivateRoute status={status}>
              <div data-testid="private-child" />
            </PrivateRoute>
          }
        />
        <Route path={Address.login} element={<div data-testid="login-page" />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe('PrivateRoute', () => {
  it('renders children when status is Auth', () => {
    renderPrivateRoute(PrivateStatus.Auth);

    expect(screen.getByTestId('private-child')).toBeInTheDocument();
    expect(screen.queryByTestId('login-page')).not.toBeInTheDocument();
  });

  it.each([PrivateStatus.Guest, PrivateStatus.Unknown])(
    'redirects to login when status is %s',
    (status) => {
      renderPrivateRoute(status);

      expect(screen.getByTestId('login-page')).toBeInTheDocument();
      expect(screen.queryByTestId('private-child')).not.toBeInTheDocument();
    },
  );
});
