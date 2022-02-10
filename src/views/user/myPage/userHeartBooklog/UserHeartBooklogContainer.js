import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function UserHeartBooklogContainer() {
  const BookLog = styled.div`
    width: 100%;
    text-align: center;
  `;
  const Button = styled.div`
    margin-left: 700px;
  `;
  const Header = styled.div`
    display: flex;
    justify-content: space-between;
    span {
      margin-left: 8rem;
    }
    label {
      display: inline-block;
    }
  `;
  return (
    <div>
      <h2>하트 누른 북로그</h2>
      <br></br>
      <div>
        <Link to="/booklogregister">
          <Button>
            <button>저장</button>
          </Button>
        </Link>
        <Header>
          <span>
            <label>공개된 북로그만 보기</label>
            {/* <input value={isOpen} onChange={checkBoxHandler} type="checkbox" /> */}
          </span>
        </Header>
        <br></br>
        {/* <BookLog>{context}</BookLog>
        <Pagination
          activePage={page}
          itemsCountPerPage={10}
          totalItemsCount={totalCnt}
          pageRangeDisplayed={5}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
        /> */}
      </div>
    </div>
  );
}
export default UserHeartBooklogContainer;
