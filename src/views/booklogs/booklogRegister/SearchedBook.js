import styled from "styled-components";

const SearchedBook = (props) => {
  const Bookinfo = styled.div`
    .wrapper {
      display: inline-block;
    }
    p {
      margin: 0;
    }
  `;
  const Wrapper = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  `;
  const bookSelectHandler = () => {
    props.onClick(props.book);
  };
  let tmpUrl;

  tmpUrl = props.book.largeImgUrl.substring(
    0,
    props.book.largeImgUrl.length - 5
  );
  tmpUrl = tmpUrl + "h.jpg";
  console.log(tmpUrl);

  return (
    <Bookinfo onClick={bookSelectHandler}>
      <img src={tmpUrl} alt={props.book.title}></img>
      <Wrapper>
        <p>{props.book.title}</p>
        <p>{props.book.author}</p>
      </Wrapper>
    </Bookinfo>
  );
};
export default SearchedBook;
