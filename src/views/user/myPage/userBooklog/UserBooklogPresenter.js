import React, { useState } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";

function UserBooklogPresenter() {
  const { path } = useParams();

  const Title = styled.div`
    padding-left: 10px;
  `;

  const UtilButton = styled.div`
    display: flex;
    justify-content: space-between;
      margin-left: 1rem;
      button {
    margin-left: 1rem;
  }
  `;

  return (
    <div>
      <Title>
        <h2>나의 북로그</h2>
      </Title>
        <Link to="/booklogdetail" state={{ logSeq: 1, infoSeq: 1 }}>
          <div>북로그1</div>
        </Link>
        <UtilButton>
        <Link to="/booklogregister">
          <UtilButton>
            <div>
          <button> 작성 </button>
          </div>
          </UtilButton>
        </Link>
      </UtilButton>
      <div>{/* <BoardList /> */}</div>
    </div>
  );
}

export default UserBooklogPresenter;
