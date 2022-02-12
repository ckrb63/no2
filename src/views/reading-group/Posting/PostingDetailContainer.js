//독서모임 포스팅 상세보기

import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useSelector } from "react-redux";
const url = "https://i6a305.p.ssafy.io:8443";
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
`;

const Label = styled.div`
  label {
    display: inline-block;
  }
  p {
    margin: 0 1rem;
    display: inline-block;
  }
`;
function PostingDetailContainer() {
  const userInfo = useSelector((state) => state.authReducer).memberInfo;
  const [group, setGroup] = useState({});
  const jwtToken = JSON.parse(sessionStorage.getItem("jwtToken"));
  let isParticipated;
  const getPage = async () => {
    const response = await axios.get(url + `/api/v1/reading-groups/3054`, {
      headers: {
        Authorization: `Bearer ` + jwtToken,
      },
    });
    setGroup(response.data.data.readingGroupDetail);
  };
  const subscriptionGroup = async () => {
    const response = await axios.post(
      url + `/api/v1/reading-groups/3054/members`,
      {
        headers: {
          Authorization: `Bearer ` + jwtToken,
        },
      }
    );
    console.log(response);
  };
  const cancelSubcription = async () => {
    const response = await axios.delete(
      url + `/api/v1/reading-groups/3054/members/${userInfo.seq}`,
      {
        headers: {
          Authorization: `Bearer ` + jwtToken,
        },
      }
    );
    console.log(response);
  };
  useEffect(() => {
    getPage();
  }, []);
  if (group.participants) {
    isParticipated = group.participants.includes(userInfo.nickname);
  }
  return (
    <Wrapper>
      <Wrapper2>
        {!isParticipated ? (
          <Button>
            <button onClick={subscriptionGroup}>신청하기</button>
          </Button>
        ) : (
          <Button>
            <button onClick={cancelSubcription}>신청취소</button>
          </Button>
        )}

        <h5>{group.title}</h5>
        <hr></hr>
        <h5>{group.content}</h5>
        <Label>
          <label>시작</label>
          <p>{group.startDate}</p>
          <label>종료</label>
          <p>{group.endDate}</p>
        </Label>
        <Label>
          <label>분위기</label>
          <p>{group.readingGroupType}</p>
        </Label>
        <Label>
          <label>모집마감</label>
          <p>{group.deadline}</p>
        </Label>
        <Label>
          <label>최소레벨</label>
          <p>{group.minLevel}</p>
        </Label>
        <Label>
          <label>상태</label>
          <p>{group.status}</p>
        </Label>
        <Label>
          <label>생성일자</label>
          <p>{group.createdDate}</p>
        </Label>
        <Label>
          <label>요일</label>
          <p>{group.days}</p>
        </Label>
        <Label>
          <label>작성자</label>
          <p>{group.writer}</p>
        </Label>
        <Label>
          <label>참여자</label>
          <p>{group.participants}</p>
        </Label>
      </Wrapper2>
    </Wrapper>
  );
}
export default PostingDetailContainer;
