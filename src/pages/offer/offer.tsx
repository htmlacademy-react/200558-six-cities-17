import { useState } from 'react';
import Cards from '../../components/cards/cards';
import CommentForm from '../../components/commentForm/commentForm';
import { Link, Navigate, useParams } from 'react-router-dom';
import { TOffer, TOffersProp } from '../../types/types';
import OfferInsideList from '../../components/offerInsideList/offerInsideList';
import OfferGallery from '../../components/offerGallery/offerGallery';
import ReviewsList from '../../components/reviewsList/reviewsList';
import { offers, offerPages } from '../../mocks/offers';

export default function Offer({ offers }: TOffersProp): JSX.Element {

  const [cardHover, setCardHover] = useState<string | null>(null);
  const onCommontFormSubmit = (text: string) => {
  };
  const ID_OFFER = useParams().id;
  const offer = offers.find(({ id }) => id === ID_OFFER);
  console.log('offer=', offer);
  // const navigate = useNavigate();
  // if (!offer) {

  //   navigate('/');
  // }

  if (!offer) {
    return <Navigate to="*"/>;
  }

  const RARING_WIDTH = `${offer?.rating / 5 * 100}%`;
  const offerPage  = offerPages.find(({ id }) => id === ID_OFFER);



  console.log('offerPage=', offerPage);
  const imgUrl = offerPage?.images.map((url) => [url, offerPage.description]);
  //const host =  offerPage.host;

  return (
    <div className="page" data-t={cardHover}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
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

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            {/* <div className="offer__gallery">
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/room.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-02.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-03.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/studio-01.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio" />
              </div>
            </div> */}
            <OfferGallery>
              {imgUrl}
            </OfferGallery>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offerPage?.isPremium &&
                <div className="offer__mark">
                  <span>Premium</span>
                </div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offerPage?.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: RARING_WIDTH }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offerPage?.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  Apartment
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offerPage?.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                {/* <ul className="offer__inside-list">
                  <li className="offer__inside-item">
                        Wi-Fi
                  </li>
                  <li className="offer__inside-item">
                        Washing machine
                  </li>
                  <li className="offer__inside-item">
                        Towels
                  </li>
                  <li className="offer__inside-item">
                        Heating
                  </li>
                  <li className="offer__inside-item">
                        Coffee machine
                  </li>
                  <li className="offer__inside-item">
                        Baby seat
                  </li>
                  <li className="offer__inside-item">
                        Kitchen
                  </li>
                  <li className="offer__inside-item">
                        Dishwasher
                  </li>
                  <li className="offer__inside-item">
                        Cabel TV
                  </li>
                  <li className="offer__inside-item">
                        Fridge
                  </li>
                </ul> */}
                <OfferInsideList>
                  {offerPage?.goods.map(text=>text)}
                </OfferInsideList>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    Angelina
                  </span>
                  <span className="offer__user-status">
                    Pro
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                {/* <ul className="reviews__list">
                  <li className="reviews__item">
                    <div className="reviews__user user">
                      <div className="reviews__avatar-wrapper user__avatar-wrapper">
                        <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar" />
                      </div>
                      <span className="reviews__user-name">
                            Max
                      </span>
                    </div>
                    <div className="reviews__info">
                      <div className="reviews__rating rating">
                        <div className="reviews__stars rating__stars">
                          <span style={{ width: '80%' }}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <p className="reviews__text">
                            A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                      </p>
                      <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
                    </div>
                  </li>
                </ul> */}
                <ReviewsList>{['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.', 'wefw']}</ReviewsList>
                <CommentForm onSubmit={onCommontFormSubmit} key="CommentForm" />
              </section>
            </div>
          </div>
          <section className="offer__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <Cards offers={offers}
                variant='vertical'
                onHover={(id) => {
                  setCardHover(id);
                }}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
