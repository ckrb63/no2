import UserInfoContainer from "./userInfo/UserInfoContainer";
import UserBookclubPresenter from "./userBookclub/UserBookclubPresenter";
import UserChallengePresenter from "./userChallenge/UserChallengePresenter";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../../main/Sidebar";
import styled from "styled-components";
import Login from "../login/LoginContainer";
import UserBooklogPresenter from "./userBooklog/UserBooklogListPresenter";
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
        <Route path="/mybooklog" exact element={<UserBooklogPresenter />} />
        <Route path="/mybookclub" exact element={<UserBookclubPresenter />} />
        <Route path="/mychallenge" exact element={<UserChallengePresenter />} />
      </Routes>
    </Center>
  );
}

export default Mypage;
