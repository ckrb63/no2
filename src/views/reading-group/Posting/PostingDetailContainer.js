//독서모임 포스팅 상세보기

import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

function PostingDetailContainer() {
  const Wrapper = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  `;

  const Wrapper2 = styled.div`
    text-align: left;
    justify-content: center;
    align-items: center;
    /* font-size: 1.5rem; */
    border-radius: 1.5rem;
    padding-left: 15rem;
    border: 1px solid #cccccc;
    padding-top: 40px;
    padding-bottom: 40px;
  `;
  
    const Button = styled.div`
    margin-left: 750px;
    `
  return (
    <Wrapper>
      <Wrapper2>
          <Button><button>신청하기</button></Button>
      
        <h5>독서모임 포스팅 제목</h5>
        <label>시작일~끝일</label>
        <label>분위기</label>
        <label>모임일정</label>
        <hr></hr>
        <h5>독서모임 포스팅 내용</h5>
      </Wrapper2>
      
    </Wrapper>
  );
}
export default PostingDetailContainer;
