import UserInfoContainer from "./userInfo/UserInfoContainer";
import UserBooklogContainer from "./userBooklog/UserBooklogContainer";
import UserBookclubPresenter from "./userBookclub/UserBookclubPresenter";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../../main/Sidebar";
import styled from "styled-components";
import UserHeartBooklogContainer from "./userHeartBooklog/UserHeartBooklogContainer";

const Center = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: row;
`;

function Mypage() {
  return (
    <Center>
      <Sidebar />
      <Routes>
        <Route index path="/" element={<UserInfoContainer />} />
        <Route path="/mybooklog" exact element={<UserBooklogContainer />} />
        <Route path="/mybookclub" exact element={<UserBookclubPresenter />} />
        <Route path="/myheartbooklog" exact element={<UserHeartBooklogContainer />} />
      </Routes>
    </Center>
  );
}

export default Mypage;
