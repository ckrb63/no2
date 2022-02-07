import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import BookLogCard from "./BookLogCard";
import { useSelector } from "react-redux";

const url = "https://i6a305.p.ssafy.io:8443";

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

  //토큰
  const jwtToken = JSON.parse(sessionStorage.getItem("jwtToken"));
  const user = useSelector((state) => state.authReducer);
  console.log(jwtToken);
  const pageLoading = async () => {
    // console.log(enteredText.current.value);
    const books = await axios.get(
      url + `/api/v1/booklogs/me?page=1&size=10`,
      { open: true },
      {
        headers: {
          Authorization: `Bearer ` + jwtToken,
        },
      }
    );
    console.log(books);
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
      <h2>나의 북로그</h2>
      <div>
        <Link to="/booklogdetail" state={{ logSeq: 1, infoSeq: 1 }}>
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
    </div>
  );
}
export default UserBooklogPresenter;
