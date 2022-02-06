const BookLogCard = (props) => {
  return (
    <div>
      <img src={props.book.imgUrl} alt={props.book.title} />
      <p>{props.book.title}</p>
    </div>
  );
};
export default BookLogCard;
