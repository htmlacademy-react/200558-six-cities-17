
enum housingRange {apartment= 'Apartment', room='Room'}
type TCard ={
    id:string;
    price: number;
    title:string;
    type:housingRange;
    favorites?: boolean;
};
type TCardsProps={cards:TCard[]};
export type { TCardsProps, TCard };
const cards:TCard[] = [
  {
    id: '1',
    price: 123,
    title: 'Beautiful & luxurious apartment at great location',
    type: housingRange.apartment
  },
  {
    id: '2',
    price: 80,
    title: 'Wood and stone place',
    type: housingRange.room,
    favorites:true
  },
  {
    id: '3',
    price: 132,
    title: 'Canal View Prinsengracht',
    type: housingRange.apartment
  },
  {
    id: '4',
    price: 180,
    title: 'Nice, cozy, warm big bed apartment',
    type: housingRange.apartment
  },
  {
    id: '5',
    price: 80,
    title: 'Wood and stone place',
    type: housingRange.room
  }
];
export { cards,housingRange };
