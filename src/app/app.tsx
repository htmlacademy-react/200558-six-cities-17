import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/main/main';
import Login from '../pages/login/login';
import Favorites from '../pages/favorites/favorites';
import Offer from '../pages/offer/offer';
import { PrivateStatus, Address } from '../data/constant';
import ErrorAddressing from '../pages/errorAddressing/errorAddressing';
import PrivateRoute from '../privateRoute';
import { TOffer } from '../types/types';

export default function App({ offers }: { offers:TOffer[]}):JSX.Element {
  const offersCities: Record<string, TOffer[]> = {};

  offers.forEach((el) => {
    const city = el.city;
    const cityName: string = city.name;
    if (offersCities[cityName] === undefined) {
      offersCities[cityName] = [];
    }
    offersCities[cityName].push({ ...el });
  });

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<Favorites offers={offersCities} />}/> */}
        <Route index element={<Main offersCount={4} offers={offersCities} />} />
        {/* <Route index element={<Offer offers={offers} />} /> */}
        <Route path={Address.login} element={<Login />} />
        <Route path={Address.favorites} element={
          <PrivateRoute status={PrivateStatus.Guest}>
            <Favorites offers={offersCities}/>
          </PrivateRoute>
        }
        />
        <Route path={Address.offer} element={<Offer offers={offers} />} />
        <Route path="*" element={<ErrorAddressing/>}/>
      </Routes>
    </BrowserRouter>
  );
}
