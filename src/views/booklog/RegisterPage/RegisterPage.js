import React, { useState } from "react";
import SearchBook from "./SearchBook";
import Modal from "react-modal";
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
            <button onClick={onSubmitChangeBook} style={{position: 'absolute', right: 0, marginRight:"150px"}}>책 변경</button>
            <button onClick={onSubmitArticle} style={{position: 'absolute', right: 0, marginRight:"50px"}}>저장</button>
          </div>
          <div>
            <img className={style.img} src={largeImgUrl}></img>
            <div className={style.info}>
                <table style={{align:"center"}}>
                    <thread>
                        <tr>
                            <th> 제목 </th>
                            <td>{title}</td>
                        </tr>
                        <tr>
                            <th> 작가 </th>
                            <td>{author}</td>
                        </tr>
                        <tr>
                            <th> 출판사 </th>
                            <td>{publisher}</td>
                        </tr>
                        <tr>
                            <th> 출판일 </th>
                            <td>{publicationDate}</td>
                        </tr>
                        <tr>
                            <th> 별점 </th>
                            <td><StarRating rate={ratingHandler}/></td>
                        </tr>
                        <tr>
                            <th> 한줄평 </th>
                            <td><input onChange={onSentenceChange} value={oneSentence}></input></td>
                        </tr>
                    </thread>
                </table>
            </div>
          </div>
          <hr></hr>
          <form onSubmit>
            <br />
            <div style={{ maxWidth: "700px", margin: "2rem" }}>
              <input size="100"
                onChange={onTitleChange}
                value={TitleValue}
                type="text"
                name="title"
                placeholder="제목을 입력해주세요."
              />
              <br></br>
              <textarea style={{resize: "none", height: "300px", width: "800px"}}
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
