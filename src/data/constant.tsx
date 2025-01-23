import cls from 'classnames';

export enum Address {
  main= '/',
  login='/login',
  favorites= '/favorites',
  offer= '/offer/:id'
}

export enum PrivateStatus {
  Auth = 'AUTH',
  Guest = 'GUEST',
  Unknown = 'UNKNOWN'
}

const СITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

//const СITIES: TCity[] = [...СITIES_TYPE] as const;

export { СITIES };

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

//const favoritesClass = (class, isFavorite) => cls(class, { [class]: isFavorite }); 
