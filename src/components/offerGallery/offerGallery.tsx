export default function OfferGallery({ children }: {children:Array<Array<string>>}) {
  return (
    <div className="offer__gallery">
      {
        children.map((el) => (
          <div className="offer__image-wrapper">
            <img className={`offer__image ${el[2]}`} src={el[0]} alt={el[1]} />
          </div>
        ))
      }
    </div>
  );
}
