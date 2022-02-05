import axios from "axios";
import { useState } from "react";
import SearchedBook from "./SearchedBook";
import Pagination from "react-js-pagination";

const url = "http://i6a305.p.ssafy.io:8080";
const SearchBook = (props) => {
  const [enteredText, setEnteredText] = useState('');
  const [context, setContext] = useState([]);
  const selectBook = (book) => {
    props.setbook(book);
    props.search(true);
  };

  const [page, setPage]= useState(1);
  
  const onClickHandler = async () => {
    const books = await axios
      .post(url + `/api/v1/bookinfos`, {
        page: page,
        limit: 12,
        searchCategory:"title",
        searchKeyword:enteredText,
        orderCategory:"review"
      });
    const bookList = books.data.data.bookList;
    setContext(bookList.map((book)=>{
      console.log(book);
      return <SearchedBook onClick={selectBook} book={book} key={book.seq}/>;
    }));
  };
  function handlePageChange(event){
    setPage(event);
  }
  const inputChangeHandler=(event)=>{
    setEnteredText(event.target.value);
  };
  console.log(context);
  return <div>
      <label>책을 검색해주세요.</label>
    <div>
      <input value={enteredText} onChange={inputChangeHandler} type="text"></input>
      <button onClick={onClickHandler}>검색</button>
    </div>
    <div>{context}</div>
    <Pagination activePage={page} 
      itemsCountPerPage={12} 
      pageRangeDisplayed={5} 
      prevPageText={"‹"} 
      nextPageText={"›"} 
      onChange={handlePageChange} />
  </div>;
};
export default SearchBook;