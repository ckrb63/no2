//독서모임 포스팅 목록 --> 독서모임 배너 누르면 첫 화면
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
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
  width: 50rem;
  margin-left: 5rem;
  font-size: 1.5rem;
  text-align: left;
  p{
    color: black;
    text-decoration-line: none;
  }
  .title {
    text-decoration: none;
    font-weight: bold;
  }
  .author {
    font-size: 1.3rem;
  }
`;

const Button1 = styled.div`
  margin-left: 720px;
`;
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
const url = "https://i6a305.p.ssafy.io:8443";

function PostingListContainer() {
  const [totalCnt, setTotalCnt] = useState(0);
  const [page, setPage] = useState(1);
  const [groups, setGroups] = useState([]);
  const jwtToken = JSON.parse(sessionStorage.getItem("jwtToken"));
  const getList = async () => {
    const response = await axios.get(
      url + `/api/v1/reading-groups?size=5&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ` + jwtToken,
        },
      }
    );
    setTotalCnt(response.data.data.readingGroups.totalCnt);
    setGroups(response.data.data.readingGroups.readingGroupMiniDtos);
  };
  const handlePageChange = (page) => {
    setPage(page);
  };
  useEffect(() => {
    getList();
  }, [page]);
  const groupList = groups.map((group) => {
    return (
      <StyledLink to="/postingregister" key={group.readingGroupSeq}>
        <Postinginfo>
          <img
            src={"https://t1.daumcdn.net/cfile/tistory/2520CF4753E942C332"}
            height="100px"
            width="100px"
          ></img>
          <Wrapper>
            <p className="title">{`제목 ${group.title}`}</p>
            <p className="content">{`날짜 ${group.startDate} ~ ${group.endDate}`}</p>
            <p className="atmos">{`분위기 ${group.readingGroupType}`}</p>
            <p className="atmos">{`모집마강 ${group.deadline}`}</p>
            <p className="atmos">{`현재인원 ${group.participantSeqs.length}`}</p>
          </Wrapper>
        </Postinginfo>
      </StyledLink>
    );
  });
  return (
    <>
      <Link to="/postingregister">
        <Button1>
          <button>독서모임 개설</button>
        </Button1>
      </Link>
      {groupList}
      <Pagination
        activePage={page}
        totalItemsCount={totalCnt}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
      />
    </>
  );
}

export default PostingListContainer;
