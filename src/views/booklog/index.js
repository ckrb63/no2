import BoardPage from "./BoardPage/BoardPage";
import { Routes, Route } from "react-router-dom";
import ArticlePage from "./ArticlePage/ArticlePage";
import RegisterPage from "./RegisterPage/RegisterPage";
function Booklog() {
    return (
        <Routes>
          <Route index path="/" element={<BoardPage />} />
          <Route path="/article/:articleId" exact element={<ArticlePage />} />
          <Route path="/register" exact element={<RegisterPage />} />
        </Routes>
    );
  }
  
  export default Booklog;