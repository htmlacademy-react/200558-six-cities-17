import { Link } from 'react-router-dom';
import { JSX } from 'react';
type TLocationsItem = { children: string[]; onClick:(el:string)=>void };
export default function LocationsItem({ children, onClick }: TLocationsItem): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {
        children.map((el: string): JSX.Element => (

          <li className="locations__item" key={el}>
            <Link className="locations__item-link tabs__item" onClick={() => onClick(el)} to="#">
              <span>{el}</span>
            </Link>
          </li>

        ))
      }
    </ul>
  );
}
