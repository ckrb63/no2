import React, { useEffect, useState } from "react";
import Toggle from "./Toggle";
import StarRating from "./StarRating";
import { BOOKLOGINFO } from "./dummydata";
import "./RegisterPage/RegisterPage.css";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Spinner from "./Spinner";
import { useLocation } from "react-router-dom";

const url = "https://77e1dca6-cd01-4930-ae25-870e7444cc55.mock.pstmn.io";

function DetailPage(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedBookLog, setSelectedBookLog] = useState({});
  const [selectedBookInfo, setSelectedBookInfo] = useState({});
  const [enteredSummary, setEnteredSummary] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredContent, setEnteredContent] = useState("");
  const location = useLocation();
  const bookLogSeq = location.state.logSeq;
  const bookInfoSeq = location.state.infoSeq;

  let bookLogData;
  let bookInfoData;
  const getBookLog = async () => {
    setIsLoading(true);
    const bookData1 = await axios.get(url + `/api/v1/booklogs/${bookLogSeq}`);
    const bookData2 = await axios.get(url + `/api/v1/bookinfos/${bookInfoSeq}`);
    console.log(bookData2);
    bookLogData = bookData1.data.data.booklog;
    bookInfoData = bookData2.data.data.bookInfo;
    setEnteredContent(bookLogData.content);
    setEnteredSummary(bookLogData.summary);
    setEnteredTitle(bookLogData.title);
    setSelectedBookLog(bookLogData);
    setSelectedBookInfo(bookInfoData);
    setIsLoading(false);
  };
  const { title, content, summary, starRating, isOpen, createdDate } =
    selectedBookLog;
  useEffect(() => {
    getBookLog();
  }, []);

  const saveArticle = async (event) => {
    event.preventDefault();
    const response = await axios.put(url + `/api/v1/booklogs/${bookLogSeq}`);
    setIsEditing(!isEditing);
    alert(response.data.data.msg);
  };
  const onDeleteArticle = async (event) => {
    event.preventDefault();
    const response = await axios.delete(url + `/api/v1/booklogs/${bookLogSeq}`);
    window.location.replace("/mypage/mybooklog");
    alert(response.data.data.msg);
  };
  const editButtonHandler = () => {
    setIsEditing(!isEditing);
  };
  const summaryHandler = (event) => {
    setEnteredSummary(event.target.value);
  };
  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const contentHandler = (event) => {
    setEnteredContent(event.target.value);
  }
  const IsOpenCircle = styled.div`
    position: absolute;
    top: 30px;
    left: 100px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: black;
  `;
  const Desc = styled.div`
    text-align: left;
  `;
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <div>
            <Desc> {isOpen ? "공개" : "비공개"} </Desc>
            <br />
            <IsOpenCircle
              style={isOpen ? { background: "blue" } : { background: "red" }}
            ></IsOpenCircle>
            {isEditing ? (
              <div>
                <button
                  onClick={saveArticle}
                  style={{
                    position: "absolute",
                    right: 0,
                    marginRight: "150px",
                  }}
                >
                  저장
                </button>
              </div>
            ) : (
              <div>
                <button
                  onClick={editButtonHandler}
                  style={{
                    position: "absolute",
                    right: 0,
                    marginRight: "150px",
                  }}
                >
                  수정
                </button>

                <button
                  onClick={onDeleteArticle}
                  style={{
                    position: "absolute",
                    right: 0,
                    marginRight: "50px",
                  }}
                >
                  삭제
                </button>
              </div>
            )}
          </div>
          <div className="wrapper">
            <img className="img" src={selectedBookInfo.largeImgUrl}></img>
            <div className="info">
              <table style={{ align: "center" }}>
                <tbody>
                  <tr>
                    <th> 제목 </th>
                    <td>{selectedBookInfo.title}</td>
                  </tr>
                  <tr>
                    <th> 작가 </th>
                    <td>{selectedBookInfo.author}</td>
                  </tr>
                  <tr>
                    <th> 출판사 </th>
                    <td>{selectedBookInfo.publisher}</td>
                  </tr>
                  <tr>
                    <th> 출판일 </th>
                    <td>{selectedBookInfo.publicationDate}</td>
                  </tr>
                  <tr>
                    <th> 별점 </th>
                    {/* <td><StarRating rate={ratingHandler} /></td> */}
                  </tr>
                  <tr>
                    <th> 한줄평 </th>
                    {isEditing ? (
                      <input onChange={summaryHandler} value={enteredSummary} />
                    ) : (
                      <td>{enteredSummary}</td>
                    )}
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
                {isEditing ? (
                  <input
                    size="100"
                    onChange={titleHandler}
                    value={enteredTitle}
                    type="text"
                    name="title"
                  />
                ) : (
                  <p>{enteredTitle}</p>
                )}
              </div>
              <br></br>
              <label>내용</label>
              {isEditing ? (
                <textarea
                  size="100"
                  onChange={contentHandler}
                  value={enteredContent}
                  type="text"
                  name="title"
                />
              ) : (
                <p>{enteredContent}</p>
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default DetailPage;
