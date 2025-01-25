import ReviewsItem from '../reviewsItem/reviewsItem';

type TReviewsListProps = {
  data: {
    comment: string;
    id: string;
  }[];
};
export default function ReviewsList({ data }: TReviewsListProps):JSX.Element {
  return (
    <ul className="reviews__list">
      {data.map(({ comment, id }) => (<ReviewsItem key={id}>{comment}</ReviewsItem>))}
    </ul>
  );
}
