import React, { useState} from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";

function UserBooklogPresenter() {
  const { path } = useParams();
  return (
    <div>
      <div className="title">
        <h2>나의 북로그</h2>
      </div>
      <div>
              <Link to="/register">
                  <button>작성</button>
              </Link>
          </div>
          <div>
              {/* <BoardList /> */}
          </div>
    </div>
  );
}

export default UserBooklogPresenter;
