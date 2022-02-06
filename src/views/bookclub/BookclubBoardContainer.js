import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

function BookclubBoardContainer() {
  const Wrapper = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  `;
  const Textarea = styled.div`
    text-align: left;
    padding-left: 20rem;
    border-radius: 3rem;
    border: 1px solid #cccccc;
    height: 150px;
    width: 500px;
  `;
  return (
    <>
      <Wrapper>
        <h3>독서모임 게시글 제목</h3>
        <Textarea>
          <div>
            <p>독서모임 게시글 내용</p>
          </div>
        </Textarea>
      </Wrapper>
      <hr></hr>
      
      <h5>댓글쓰기</h5>
    </>
  );
}
export default BookclubBoardContainer;
