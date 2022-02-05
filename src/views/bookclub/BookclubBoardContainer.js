import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

function BookclubBoardContainer(){
    const Wrapper = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  `;
    return(
        <Wrapper>
            <h2>독서모임 게시글 제목</h2>
        </Wrapper>
    );
}
export default BookclubBoardContainer;