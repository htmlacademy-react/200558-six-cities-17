import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/main/main';
import Login from '../pages/login/login';
import Favorites from '../pages/favorites/favorites';
import Offer from '../pages/offer/offer';
import { PrivateStatus, Address } from '../data/constant';
import ErrorAddressing from '../pages/errorAddressing/errorAddressing';
import PrivateRoute from '../privateRoute';
import { TOffer } from '../types/types';
import { offersCities } from '../mocks/offers';

export default function App({ offers }: { offers:TOffer[]}):JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<Favorites offers={offers} />}/> */}
        <Route index element={<Main offersCount={4} offers={offersCities} />} />
        <Route path={Address.login} element={<Login />} />
        <Route path={Address.favorites} element={
          <PrivateRoute status={PrivateStatus.Guest}>
            <Favorites offers={offers}/>
          </PrivateRoute>
        }
        />
        <Route path={Address.offer} element={<Offer offers={offers} />} />
        <Route path="*" element={<ErrorAddressing/>}/>
      </Routes>
    </BrowserRouter>
  );
}
