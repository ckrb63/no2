import React, { useState } from "react";
import Toggle from "./Toggle";
import StarRating from "./StarRating";
import { BOOKLOGINFO } from "./dummydata";
import "./RegisterPage/RegisterPage.css"
import axios from "axios";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const url = 'https://77e1dca6-cd01-4930-ae25-870e7444cc55.mock.pstmn.io';
const {booklogSeq, title, content, summary, starRating, isOpen, createdDate} = BOOKLOGINFO;

function DetailPage() {
  
//   let tmpUrl;

//     tmpUrl = selectedBook.smallImgUrl.substring(0, selectedBook.smallImgUrl.length-5);
//     tmpUrl = tmpUrl + 's.jpg';

    // axios
    //   .post(url + `/api/v1/booklogs`, {
    //     memberSeq: 1,
    //     bookInfoSeq: seq,
    //     title: TitleValue,
    //     isOpen: !toggle,
    //     content: ContentValue,
    //     summary: oneSentence,
    //     starRating: rating,
    //     readDate: new Date(),
    //   })
    //   .then(function (response) {
    //       console.log(response.status);
    //     if (response.status === 201) {
    //       alert(response.data.data.msg);
    //       document.location.href = "/mypage/mybooklog";
    //     } else {
    //       alert(response.data.data.msg);
    //     }
    //   });

  const onDeleteArticle = (event) => {
    event.preventDefault();
    // console.log(article);
  };
  const IsOpenCircle = styled.div`
    position: absolute;
    top: 30px;
    left: 100px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: black;
  `
  const Desc = styled.div`
    text-align: left;
`;
  return (
    <div>
        <div>
          <div>
            <Desc> {isOpen ? "공개" : "비공개"} </Desc>
            <br/>
            <IsOpenCircle style={isOpen? {background: 'blue'}:{background: 'red'}}></IsOpenCircle>
          <Link to="/modify">
            <button
              style={{ position: "absolute", right: 0, marginRight: "150px" }}
            >
              수정
            </button>
            </Link>
            <button
              onClick={onDeleteArticle}
              style={{ position: "absolute", right: 0, marginRight: "50px" }}
            >
              삭제
            </button>
          </div>
          <div className="wrapper">
            {/* <img className="img" src={tmpUrl}></img> */}
            <div className="info">
              <table style={{ align: "center" }}>
                  <tbody>
                  <tr>
                    <th> 제목 </th>
                    {/* <td>{selectedBook.title}</td> */}
                  </tr>
                  <tr>
                    <th> 작가 </th>
                    {/* <td>{selectedBook.author}</td> */}
                  </tr>
                  <tr>
                    <th> 출판사 </th>
                    {/* <td>{selectedBook.publisher}</td> */}
                  </tr>
                  <tr>
                    <th> 출판일 </th>
                    {/* <td>{selectedBook.publicationDate}</td> */}
                  </tr>
                  <tr>
                    <th> 별점 </th>
                    <td>
                      {/* <StarRating rate={ratingHandler} /> */}
                    </td>
                  </tr>
                  <tr>
                    <th> 한줄평 </th>
                    <td>
                      {summary}
                    </td>
                  </tr>
                  </tbody>
              </table>
            </div>
          </div>
          <hr></hr>
          <form className="wrapper">
            <br />
            <div>
                <label>제목</label>
                <div>
                    <p>{title}</p>
                </div>
              <br></br>
              <label>내용</label>
              <p>{content}</p>
            </div>
          </form>
        </div>
      )
    </div>
  );
}

export default DetailPage;
