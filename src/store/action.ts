import { createAction } from '@reduxjs/toolkit';
import { TCity } from '../types/types';

const setCity = createAction<TCity>('city');

export {setCity};
