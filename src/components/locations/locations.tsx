import { JSX } from 'react';
import { TCity, TCities } from '../../types/types';

type TLocationsProps = {
  cities: TCities;
  onClick: (el: TCity)=>void;
};

export default function Locations({ cities, onClick }: TLocationsProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((citie): JSX.Element => (

          <li className="locations__item" key={citie}>
            <div className="locations__item-link tabs__item" onClick={() => onClick(citie)}>
              <span>{citie}</span>
            </div>
          </li>

        ))
      }
    </ul>
  );
}
