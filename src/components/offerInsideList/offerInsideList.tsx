import { TChildrenStrings } from '../../types/types';
export default function OfferInsideList({ children }: TChildrenStrings) {
  return (
    <ul className="offer__inside-list">
      {
        children.map((el) => (
          <li className="offer__inside-item">
            {el}
          </li>
        ))
      }
    </ul>
  );
}
