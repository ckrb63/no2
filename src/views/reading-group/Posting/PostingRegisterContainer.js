//독서모임 포스팅 등록

import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

function PostingRegisterContainer() {
  const Wrapper = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  `;

  const Info = styled.div`
    display: inline-block;
    padding-left: 5rem;
  `;

  const Wrapper2 = styled.div`
    text-align: left;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    border-radius: 1.5rem;
    padding-left: 25rem;
    border: 1px solid #cccccc;
    padding-top: 40px;
    padding-bottom: 40px;
  `;
  const Button = styled.div`
  margin-left: 600px;
  `
  return (
    <Wrapper>
      {/* <h2>독서모임 포스팅 작성</h2> */}
      <img
        src={"https://t1.daumcdn.net/cfile/tistory/2520CF4753E942C332"}
        height="200px"
        width="200px"
      ></img>
      <Info>
        <h5>모임의 성격을 알려주세요!</h5>
        <h6>선택된 키워드에 맞게 자동으로 이미지가 생성됩니다.</h6>
        <input id="casual" value="casual" name="readingGroupType" type="radio" />{" "}
        일상적인
        <input
          id="professional"
          value="professional"
          name="readingGroupType"
          type="radio"
          style={{ marginLeft: 20 }}
        />{" "}
        전문적인
        <input
          id="friendly"
          value="friendly"
          name="readingGroupType"
          type="radio"
          style={{ marginLeft: 20 }}
        />{" "}
        친근한
      </Info>
      <hr></hr>
      <Wrapper2>
        <label>독서모임 제목</label>
        <input
          size="82"
          // onChange={onTitleChange}
          // value={TitleValue}
          type="text"
          name="title"
          placeholder="제목을 입력해주세요."
        />
        <label>독서모임 내용</label>
        <textarea
          style={{ resize: "none", height: "100px", width: "600px" }}
          // onChange={onContentChange}
          // value={ContentValue}
          name="content"
          placeholder="텍스트를 입력해주세요."
        />
        <label>독서모임 기간</label>
        <input type="date" id="startDate" name="startDate"/> 부터
        <input type="date" id="endDate" name="endDate" style={{ marginLeft: 20 }}/> 까지
        <br></br>
        {/* 주
        <select name = 'week'>
          <option value = "one">1회</option>
          <option value = "two">2회</option>
          <option value = "three">3회</option> 
          <option value = "four">4회</option>
          <option value = "five">5회</option>
          <option value = "six">6회</option>
          <option value = "seven">7회</option>
        </select> */}
        <input id="월" value="월" name="days" type="radio" /> 월
        <input
          id="화"
          value="화"
          name="days"
          type="checkbox"
          style={{ marginLeft: 20 }}
        />{" "}
        화
        <input
          id="수"
          value="수"
          name="days"
          type="checkbox"
          style={{ marginLeft: 20 }}
        />{" "}
        수
        <input
          id="목"
          value="목"
          name="days"
          type="checkbox"
          style={{ marginLeft: 20 }}
        />{" "}
        목
        <input
          id="금"
          value="금"
          name="days"
          type="checkbox"
          style={{ marginLeft: 20 }}
        />{" "}
        금
        <input
          id="토"
          value="토"
          name="days"
          type="checkbox"
          style={{ marginLeft: 20 }}
        />{" "}
        토
        <input
          id="일"
          value="일"
          name="days"
          type="checkbox"
          style={{ marginLeft: 20 }}
        />{" "}
        일<label>최대인원</label>
        <select name = 'maxMember'>
          <option value = "three">3명</option>
          <option value = "four">4명</option>
          <option value = "five">5명</option>
          <option value = "six">6명</option>
          <option value = "seven">7명</option>
          <option value = "eight">8명</option>
          <option value = "nine">9명</option>
          <option value = "ten">10명</option>
        </select>

        <label>모집 마감 날짜</label>
        <input type="date" id="deadline" name="deadline" />

        <label>신청 자격 점수</label>
        <select name = 'limitLevel'>
        <option value = "one">1점</option>
          <option value = "two">2점</option>
          <option value = "three">3점</option>
          <option value = "four">4점</option>
          <option value = "five">5점</option>
          <option value = "six">6점</option>
          <option value = "seven">7점</option>
          <option value = "eight">8점</option>
          <option value = "nine">9점</option>
          <option value = "ten">10점</option>
        </select>
        <Button><button>저장</button></Button>
        
      </Wrapper2>
      
    </Wrapper>
  );
}
export default PostingRegisterContainer;
