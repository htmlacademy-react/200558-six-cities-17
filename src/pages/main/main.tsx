import { TOffer } from '../../types/types';
import Cards from '../../components/cards/cards';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Map from '../../components/map/map';
import LocationsItem from '../../components/locationsItem/locationsItem';
type MainProp = { offersCount: number; offers: Record<string, TOffer[]> };

let offer: TOffer[];
export default function Main({ offersCount, offers }: MainProp): JSX.Element {
  const [cardHover, setCardHover] = useState<string | null>(null);
  const [sity, setSity] = useState<string>('Amsterdam');
  console.log('sity=', sity);
  if (offers[sity] !== undefined) {
    offer = [...offers[sity]];
  }

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to="#">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="#">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            {/* <ul className="locations__list tabs__list">
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" onClick={() => setSity('Paris')} to="#">
                  <span>Paris</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" onClick={() => setSity('Cologne')} to="#">
                  <span>Cologne</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" onClick={() => setSity('Brussels')} to="#">
                  <span>Brussels</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item tabs__item--active" onClick={() => setSity('Amsterdam')} to="#">
                  <span>Amsterdam</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" onClick={() => setSity('Hamburg')} to="#">
                  <span>Hamburg</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" onClick={() => setSity('Dusseldorf')} to="#">
                  <span>Dusseldorf</span>
                </Link>
              </li>
            </ul> */}
            <LocationsItem onClick={setSity}>{['Paris','Cologne','Brussels','Amsterdam','Hamburg','Dusseldorf']}</LocationsItem>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                              Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <Cards offers={offer}
                onHover={(id)=>{
                  setCardHover(id);
                }}
                variant="horizontal"
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map points={offer}
                  selectedPoint={cardHover}
                  city={offer[0].city.location}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
