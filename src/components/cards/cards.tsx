import { TOffer } from '../../types/types';
import {Card} from '../card/card';

type TCardsProps = {
  offers: TOffer[] | {point?:object};
  onHover: (id:string | null)=>void;
  variant: 'vertical' | 'horizontal';
};

export default function Cards({ offers, onHover, variant }: TCardsProps):JSX.Element {
  const config = {
    vertical:  'cities',
    horizontal: 'favorites',
  };

  return (
    <div className={`${config[variant]} places__list`}>
      {
        offers.map((el: TOffer): JSX.Element => (
          <Card
            offer={el}
            onHover={onHover}
            key={el.id}
            variant={variant}
          />
        ))
      }
    </div>
  );
}
