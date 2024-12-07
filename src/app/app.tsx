import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/main/main';
import Login from '../components/login/login';
import Favorites from '../favorites/favorites';
import Offer from '../pages/offer/offer';
import { PrivateStatus,routes } from '../data/constant';
import ErrorAddressing from '../errorAddressing/errorAddressing';
import PrivateRoute from '../privateRoute';
import type {TCard} from '../mocks/offers';

export default function App({cards}: {cards:TCard[]}):JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<Favorites cards={cards} />}/> */}
        <Route index element={<Main offersCount={4} cards={cards} />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.favorites} element={<PrivateRoute status={PrivateStatus.Guest}><Favorites cards={cards}/></PrivateRoute>} />
        <Route path={routes.offer} element={<Offer cards={cards} />} />
        <Route path="*" element={<ErrorAddressing/>}/>
      </Routes>
    </BrowserRouter>
  );
}
