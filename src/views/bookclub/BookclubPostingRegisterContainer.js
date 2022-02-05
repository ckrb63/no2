import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

function BookclubPostingRegisterContainer() {
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
  `;

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
        <input id="선택지1" value="선택지1" name="platform" type="radio" />{" "}
        선택지1
        <input
          id="선택지2"
          value="선택지2"
          name="platform"
          type="radio"
          style={{ marginLeft: 20 }}
        />{" "}
        선택지2
        <input
          id="선택지3"
          value="선택지3"
          name="platform"
          type="radio"
          style={{ marginLeft: 20 }}
        />{" "}
        선택지3
        <input
          id="선택지4"
          value="선택지4"
          name="platform"
          type="radio"
          style={{ marginLeft: 20 }}
        />{" "}
        선택지4
        <br></br>
        <input id="선택지5" value="선택지5" name="platform" type="radio" />{" "}
        선택지5
        <input
          id="선택지6"
          value="선택지6"
          name="platform"
          type="radio"
          style={{ marginLeft: 20 }}
        />{" "}
        선택지6
        <input
          id="선택지7"
          value="선택지7"
          name="platform"
          type="radio"
          style={{ marginLeft: 20 }}
        />{" "}
        선택지7
        <input
          id="선택지8"
          value="선택지8"
          name="platform"
          type="radio"
          style={{ marginLeft: 20 }}
          //   checked={this.state.selectValue === "Windows"}
          //   onChange={this.handleChange}
        />
        선택지8
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
        <input size="1" type="text" name="startmonth" />월
        <input size="1" type="text" name="startdate" />일 ~
        <input size="1" type="text" name="endmonth" />월
        <input size="1" type="text" name="enddate" />일 / 주
        <input size="1" type="text" name="startmonth" />회<br></br>
        <input id="월" value="월" name="platform" type="radio" /> 월
        <input
          id="화"
          value="화"
          name="platform"
          type="radio"
          style={{ marginLeft: 20 }}
        />{" "}
        화
        <input
          id="수"
          value="수"
          name="platform"
          type="radio"
          style={{ marginLeft: 20 }}
        />{" "}
        수
        <input
          id="목"
          value="목"
          name="platform"
          type="radio"
          style={{ marginLeft: 20 }}
        />{" "}
        목
        <input
          id="금"
          value="금"
          name="platform"
          type="radio"
          style={{ marginLeft: 20 }}
        />{" "}
        금
        <input
          id="토"
          value="토"
          name="platform"
          type="radio"
          style={{ marginLeft: 20 }}
        />{" "}
        토
        <input
          id="일"
          value="일"
          name="platform"
          type="radio"
          style={{ marginLeft: 20 }}
        />{" "}
        일<label>최대인원</label>
        <input size="1" type="text" name="max" />명<label>모집 마감 날짜</label>
        <input size="1" type="text" name="lastmonth" />월
        <input size="1" type="text" name="lastdate" />일
      </Wrapper2>
      <button
        //   onClick={onSubmitArticle}
        style={{ position: "absolute", right: 0, marginRight: "300px" }}
      >
        저장
      </button>
    </Wrapper>
  );
}
export default BookclubPostingRegisterContainer;
