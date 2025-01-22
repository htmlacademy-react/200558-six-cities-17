import { JSX } from 'react';
import { TCity } from '../../types/types';

type TLocations = { children: TCity[]; onClick: (el: TCity)=>void };

export default function Locations({ children, onClick }: TLocations): JSX.Element {
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
