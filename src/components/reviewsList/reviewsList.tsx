import ReviewsItem from '../reviewsItem/reviewsItem';
import { TChildrenStrings } from '../../types/types';
export default function ReviewsList({ children }: TChildrenStrings){
  console.log('children=', children);

  return (
    <ul className="reviews__list">
      {
        children.map((comment: string) => (<ReviewsItem>{comment}</ReviewsItem>))
      }
    </ul>
  );
}
