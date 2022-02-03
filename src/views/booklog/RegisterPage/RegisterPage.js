import React, { useState } from "react";
import SearchBook from "./SearchBook";
import Modal from "react-modal";
import RegisterOrEdit from "./Sections/RegisterOrEdit";
import Toggle from "./Toggle";
import StarRating from "./StarRating";
import BOOKINFO from "./dummydata";
import style from './RegisterPage.module.css';

const {title,author,publisher,publicationDate,largeImgUrl} = BOOKINFO;

function RegisterPage() {
  const [TitleValue, setTitleValue] = useState("");
  const [ContentValue, setContentValue] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [rating, setRating] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [oneSentence, setOneSentence] = useState("");
  const onSentenceChange = event => {
    setOneSentence(event.target.value);
  };
  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value);
  };

  const onContentChange = (event) => {
    setContentValue(event.currentTarget.value);
  };
  // console.log(ContentValue);

  const onSubmitArticle = (event) => {
    event.preventDefault();
    const article = { title: TitleValue, content: ContentValue, rating: rating, sentence:oneSentence, private:!toggle, date:new Date() };
    console.log(article);
  };

  const onSubmitChangeBook = (event) => {
    event.preventDefault();
    setIsSearched(false);
    const article = { title: TitleValue, content: ContentValue };
    // console.log(article);
  };

  const ratingHandler = (rate) => {
    setRating(rate);
  };

  const toggleHandler = (tog) => {
    setToggle(tog);
    console.log(toggle);
  };

  return (
    <div>
      <Modal isOpen={!isSearched} ariaHideApp={false}>
        <SearchBook search={setIsSearched} />
      </Modal>
      {isSearched && (
        <div>
          <div>
            <Toggle toggle={toggleHandler} />
            <button onClick={onSubmitChangeBook}>책 변경</button>
            <button onClick={onSubmitArticle}>저장</button>
          </div>
          <div>
            <img className={style.in} src={largeImgUrl}></img>
            <div className={style.in}>
                <p>{`제목:${title}`}</p>
                <p>{`작가:${author}`}</p>
                <p>{`출판사:${publisher}`}</p>
                <p>{`출판일:${publicationDate}`}</p>
                <div>별점:<StarRating rate={ratingHandler} /></div>
                <p><label>한줄평:</label><input onChange={onSentenceChange} value={oneSentence}></input></p>
            </div>
          </div>
          <form onSubmit>
            <br />
            <div style={{ maxWidth: "700px", margin: "2rem" }}>
              <input
                onChange={onTitleChange}
                value={TitleValue}
                type="text"
                name="title"
                placeholder="제목을 입력해주세요."
              />
              <hr></hr>
              <textarea
                onChange={onContentChange}
                value={ContentValue}
                name="content"
                placeholder="텍스트를 입력해주세요."
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default RegisterPage;
