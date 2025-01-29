import {СITIES} from '../data/constant';

export enum HousingRange {
  apartment = 'apartment',
  room = 'room',
  house = 'house',
}

export type TOffer = {
  id: string;
  price: number;
  title: string;
  type: HousingRange;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  favorites?: boolean;
};
export type TOffersProp = {
  offers: TOffer[];
};

export type TOffersCities = Record<string, TOffer[]>;

export type City = {
  name: string;
  location: Location;
};

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type TInitialState = {
  offers: TOffer[];
  city: TCity; // Add a type for city
  offersСities: TOffersCities; // Add a type for
};

export type TReducer = { offers: TOffer[] };

export type TChildrenJsx = { children: JSX.Element };
export type TChildrenString = { children: string };
export type TChildrenStrings = { children: string[] };

// export type TCity =
//   | 'Paris'
//   | 'Cologne'
//   | 'Brussels'
//   | 'Amsterdam'
//   | 'Hamburg'
//   | 'Dusseldorf';

export type TCity = typeof СITIES[number];
export type TCities = typeof СITIES;
