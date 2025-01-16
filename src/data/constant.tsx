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

export const СITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
