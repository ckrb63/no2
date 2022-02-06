import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import BookLogCard from "./BookLogCard";
const url = "http://i6a305.p.ssafy.io:8080";
const postmanUrl = "https://77e1dca6-cd01-4930-ae25-870e7444cc55.mock.pstmn.io";
function UserBooklogPresenter() {
  const { path } = useParams();
  const [totalCnt, setTotalCnt] = useState(0);
  const [context, setContext] = useState([]);
  const Title = styled.div`
    display: flex;
    width: 80rem;
    padding-left: 10px;
    justify-content: center;
  `;
  const pageLoading = async () => {
    // console.log(enteredText.current.value);
    const books = await axios.get(
      postmanUrl + `/api/v1/booklogs/me?page=1&size=10`
    );
    const bookList = books.data.data.booklogs;
    setTotalCnt(books.data.data.totalCnt);
    setContext(
      bookList.map((book) => {
        console.log(book);
        return <BookLogCard book={book} />;
      })
    );
  };
  // pageLoading();
  useEffect(() => {
    pageLoading();
  }, []);
  return (
    <div>
      <Title>
        <h2>나의 북로그</h2>
      </Title>
      <div>
        <Link to="/booklogdetail" state={{ logSeq: 1, infoSeq: 1 }}>
          <div>북로그1</div>
          <div>{context}</div>
        </Link>
        <Link to="/booklogregister">
          <button
            style={{ position: "absolute", right: 0, marginRight: "20px" }}
          >
            작성
          </button>
        </Link>
      </div>
      <div>{/* <BoardList /> */}</div>
    </div>
  );
}

export default UserBooklogPresenter;
