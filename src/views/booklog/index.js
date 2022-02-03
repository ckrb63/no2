import BoardPage from "./BoardPage/BoardPage";
import { Routes, Route } from "react-router-dom";
import ArticlePage from "./ArticlePage/ArticlePage";
import RegisterPage from "./RegisterPage/RegisterPage";
import RegisterOrEdit from "./RegisterPage/Sections/RegisterOrEdit";
function Booklog() {
    return (
        <Routes>
          <Route index path="/" element={<BoardPage />} />
          <Route path="/article/:articleId" exact element={<ArticlePage />} />
          <Route path="/register" exact element={<RegisterOrEdit />} />
        </Routes>
    );
  }
  
  export default Booklog;