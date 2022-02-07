import BooklogCard from "./BooklogCard";
import BooklogNavi from "./BooklogNavi";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardBox = styled.div`
  width: 100rem;
  height: 100%;
  background: green;
  margin: 0 auto;
`;

function UserBooklogListPresenter2({ data, isPopular }) {
  // console.log(data);

  return (
    <div>
      <Link to="/booklogregister">
        <button style={{ position: "absolute", right: 0, marginRight: "160px" }}>
          작성
        </button>
      </Link>
      <div>
        <h2>나의 북로그</h2>
        <BooklogNavi/>
        <CardBox>
          {data.map((data, index) => (
            <BooklogCard booklog={data} key={index} />
          ))}
        </CardBox>
      </div>
    </div>
  );
}

export default UserBooklogListPresenter2;
