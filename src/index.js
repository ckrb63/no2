import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./common/reducers/index";
import { composeWithDevTools } from "redux-devtools-extension"; // 리덕스 개발자 도구
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import Login from "./views/user/login/LoginContainer";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import Signup from "./views/user/signup/SignupContainer";
import MyPage from "./views/user/myPage/index";
// import Booklog from "./views/booklog";
import UserInfoContainer from "./views/user/myPage/userInfo/UserInfoContainer";
import RegisterPage from "./views/booklog/RegisterPage/RegisterPage";
import DetailPage from "./views/booklog/DetailPage";
import ModifyPage from "./views/booklog/ModifyPage";
const store = createStore(rootReducer, composeWithDevTools()); // 스토어를 만듭니다.
const listener = () => {
  const state = store.getState();
  console.log(state);
};
const unsubscribe = store.subscribe(listener);

const persistor = persistStore(store);

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mypage" element={<MyPage />}>
            <Route index element={<UserInfoContainer />} />
            <Route path="mybooklog" />
            <Route path="mybookclub" />
            <Route path="mychallenge" />
          </Route>
          {/* <Route path="/booklog" element={<Booklog />} /> */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/modify" element={<ModifyPage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  rootElement
);
