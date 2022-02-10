//독서모임 포스팅 등록
import React, { Children, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
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
`;
const url = "https://i6a305.p.ssafy.io:8443";
function PostingRegisterContainer() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [deadLine, setDeadLine] = useState();
  const [maximum, setMaximum] = useState(3);
  const [days, setDays] = useState([]);
  const [limitLevel, setLimitLevet] = useState(1);
  const [readingGroupType, setReadingGroupType] = useState();
  const jwtToken = JSON.parse(sessionStorage.getItem("jwtToken"));
  const onTypeButtonHandler = (event) => {
    setReadingGroupType(event.target.id);
  };
  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const onContentChange = (event) => {
    setContent(event.target.value);
  };
  const onStartDateChange = (event) => {
    setStartDate(event.target.value);
  };
  const onEndDateChange = (event) => {
    setEndDate(event.target.value);
  };
  const onDayChange = (event) => {
    if (event.target.checked) {
      setDays([...days, event.target.id]);
    } else {
      setDays(days.filter((day) => day !== event.target.id));
    }
  };
  const onMaximumChange = (event) => {
    setMaximum(event.target.value);
  };
  const onDeadLineChange = (event) => {
    setDeadLine(event.target.value);
  };
  const onLevelChange = (event) => {
    setLimitLevet(event.target.value);
  };
  const submitHandler = async () => {
    console.log({
      title,
      content,
      limitLevel: parseInt(limitLevel),
      maxMember: parseInt(maximum),
      deadLine,
      startDate,
      endDate,
      readingGroupType,
      days
    });
    const response = await axios.get(
      url + `/api/v1/reading-groups`,
      {
        title,
        content,
        limitLevel: parseInt(limitLevel),
        maxMember: parseInt(maximum),
        deadLine,
        startDate,
        endDate,
        readingGroupType,
        days
      },
      {
        headers: {
          Authorization: `Bearer ` + jwtToken
        }
      }
    );
    console.log(response);
  };
  return (
    <Wrapper>
      {/* <h2>독서모임 포스팅 작성</h2> */}
      <img
        src={"https://t1.daumcdn.net/cfile/tistory/2520CF4753E942C332"}
        height="150px"
        width="150px"
      ></img>
      <Info>
        <h5>모임의 성격을 알려주세요!</h5>
        <h6>선택된 키워드에 맞게 자동으로 이미지가 생성됩니다.</h6>
        <input
          id="casual"
          value="casual"
          name="readingGroupType"
          type="radio"
          onChange={onTypeButtonHandler}
        />{" "}
        일상적인
        <input
          id="professional"
          value="professional"
          name="readingGroupType"
          type="radio"
          onChange={onTypeButtonHandler}
          style={{ marginLeft: 20 }}
        />{" "}
        전문적인
        <input
          id="friendly"
          value="friendly"
          name="readingGroupType"
          type="radio"
          onChange={onTypeButtonHandler}
          style={{ marginLeft: 20 }}
        />{" "}
        친근한
      </Info>
      <hr></hr>
      <Wrapper2>
        <label>독서모임 제목</label>
        <input
          size="82"
          onChange={onTitleChange}
          value={title}
          type="text"
          name="title"
          placeholder="제목을 입력해주세요."
        />
        <label>독서모임 내용</label>
        <textarea
          style={{ resize: "none", height: "100px", width: "600px" }}
          onChange={onContentChange}
          value={content}
          name="context"
          placeholder="텍스트를 입력해주세요."
        />
        <label>독서모임 기간</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          onChange={onStartDateChange}
        />{" "}
        부터
        <input
          type="date"
          id="endDate"
          name="endDate"
          style={{ marginLeft: 20 }}
          onChange={onEndDateChange}
        />{" "}
        까지
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
        <input
          id="mon"
          value="mon"
          name="days"
          type="checkbox"
          onChange={onDayChange}
        />{" "}
        월
        <input
          id="tue"
          value="tue"
          name="days"
          type="checkbox"
          onChange={onDayChange}
          style={{ marginLeft: 20 }}
        />{" "}
        화
        <input
          id="wed"
          value="wed"
          name="days"
          type="checkbox"
          onChange={onDayChange}
          style={{ marginLeft: 20 }}
        />{" "}
        수
        <input
          id="thu"
          value="thu"
          name="days"
          type="checkbox"
          onChange={onDayChange}
          style={{ marginLeft: 20 }}
        />{" "}
        목
        <input
          id="fri"
          value="fri"
          name="days"
          type="checkbox"
          onChange={onDayChange}
          style={{ marginLeft: 20 }}
        />{" "}
        금
        <input
          id="sat"
          value="sat"
          name="days"
          type="checkbox"
          onChange={onDayChange}
          style={{ marginLeft: 20 }}
        />{" "}
        토
        <input
          id="sun"
          value="sun"
          name="days"
          type="checkbox"
          onChange={onDayChange}
          style={{ marginLeft: 20 }}
        />{" "}
        일<label>최대인원</label>
        <select name="maxMember" onChange={onMaximumChange}>
          <option value={3}>3명</option>
          <option value={4}>4명</option>
          <option value={5}>5명</option>
          <option value={6}>6명</option>
          <option value={7}>7명</option>
          <option value={8}>8명</option>
          <option value={9}>9명</option>
          <option value={10}>10명</option>
        </select>
        <label>모집 마감 날짜</label>
        <input
          type="date"
          id="deadline"
          name="deadline"
          onChange={onDeadLineChange}
        />
        <label>신청 자격 점수</label>
        <select name="limitLevel" onChange={onLevelChange}>
          <option value={1}>1점</option>
          <option value={2}>2점</option>
          <option value={3}>3점</option>
          <option value={4}>4점</option>
          <option value={5}>5점</option>
          <option value={6}>6점</option>
          <option value={7}>7점</option>
          <option value={8}>8점</option>
          <option value={9}>9점</option>
          <option value={10}>10점</option>
        </select>
        <Button>
          <button onClick={submitHandler}>저장</button>
        </Button>
      </Wrapper2>
    </Wrapper>
  );
}
export default PostingRegisterContainer;
