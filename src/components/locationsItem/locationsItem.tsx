import { JSX } from 'react';
import { TCity } from '../../types/types';

type TLocationsItem = { children: TCity[]; onClick: (el: TCity)=>void };

export default function LocationsItem({ children, onClick }: TLocationsItem): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {
        children.map((el): JSX.Element => (

          <li className="locations__item" key={el}>
            <div className="locations__item-link tabs__item" onClick={() => onClick(el)}>
              <span>{el}</span>
            </div>
          </li>

        ))
      }
    </ul>
  );
}
