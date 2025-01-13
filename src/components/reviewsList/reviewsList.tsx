import ReviewsItem from '../reviewsItem/reviewsItem';
import { TChildrenStrings } from '../../types/types';
export default function ReviewsList({ children }: TChildrenStrings){
  return (
    <ul className="reviews__list">
      {
        children.map((comment: string, index) => (<ReviewsItem key={index}>{comment}</ReviewsItem>))
      }
    </ul>
  );
}
