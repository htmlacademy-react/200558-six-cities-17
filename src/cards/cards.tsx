import type { TCard } from '../mocks/offers';
import {Card} from '../components/card/card';

type TCardsProps = {
  cards:TCard[];
  classFraper:string;
  classBlock:string;
  onHover: (id:string | null)=>void;
  };

export default function Cards({ cards, ...CardsProps }: TCardsProps):JSX.Element {
  return (
    <div className={`${CardsProps.classFraper} places__list`}>
      {
        cards.map((el: TCard): JSX.Element => (
          <Card offer={el} {...CardsProps} key={el.id}/>
        ))
      }
    </div>
  );
}
