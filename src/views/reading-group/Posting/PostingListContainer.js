//독서모임 포스팅 목록 --> 독서모임 배너 누르면 첫 화면

import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

function PostingListContainer() {
  const Postinginfo = styled.div`
    display: flex;
    border: 1px solid #cccccc;
    height: 13rem;
    margin: 0 10rem;
    cursor: pointer;
    p {
      margin: 0;
    }
    margin-bottom: 1rem;
    align-items: center;
    padding: 1rem;
    padding-left: 5rem;
    border-radius: 2rem;
    transition: all 0.1s;
    &:hover {
      transform: scale(1.03);
    }
    &:active {
      transform: scale(1.01);
    }
  `;

  const Wrapper = styled.div`
    display: inline-block;
    margin-left: 5rem;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    text-align: left;
    .title {
      font-weight: bold;
    }
    .author {
      font-size: 1.3rem;
    }
  `;

  const Button1 = styled.div`
    margin-left: 720px;
  `;

const Button2 = styled.div`
margin-left: 500px;
`;

  return (
    <>
      <Button1>
        <button>독서모임 개설</button>
      </Button1>
      <Postinginfo>
        <img
          src={"https://t1.daumcdn.net/cfile/tistory/2520CF4753E942C332"}
          height="100px"
          width="100px"
        ></img>
        <Wrapper>
          <p className="title">제목</p>
          <p className="content">내용</p>
          <p className="atmos">분위기</p>
        </Wrapper>
        {/* <span>참가자수</span> */}
        <Button2>
        <button>신청하기</button>
        </Button2>
        {/* <span>모집마감날짜</span> */}
      </Postinginfo>
    </>
  );
}

export default PostingListContainer;
