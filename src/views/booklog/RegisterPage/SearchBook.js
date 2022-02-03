import axios from "axios";
import { useState } from "react";
const url = "https://77e1dca6-cd01-4930-ae25-870e7444cc55.mock.pstmn.io";
const SearchBook = (props) => {
  const [enteredText, setEnteredText] = useState('');
  let context;
  const onClickHandler = async () => {
    const books = await axios
      .post(url + `/api/v1/bookinfos`, {
        page: 1,
        limit: 10,
        searchCategory:"title",
        searchKeyword:enteredText,
        orderCategory:"review"
      });
    const bookList = books.data.data.bookList;
    console.log(bookList);
    props.search(true);
  };
  const inputChangeHandler=(event)=>{
    setEnteredText(event.target.value);
  };
  return <div>
    <label>책을 검색해주세요.</label>
    <div>
      <input value={enteredText} onChange={inputChangeHandler} type="text"></input>
      <button onClick={onClickHandler}>검색</button>
    </div>
  </div>;
};
export default SearchBook;
