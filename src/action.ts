import { createAction } from '@reduxjs/toolkit';
import { TCity } from './types/types';

const setSity = createAction<TCity>('sity');

export {setSity};
