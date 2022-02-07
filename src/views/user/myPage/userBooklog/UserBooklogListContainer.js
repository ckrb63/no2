import UserBooklogListPresenter2 from "./UserBooklogListPresenter2";
import { useEffect, useState } from "react";
import { userbooklogList } from "../../../../common/api/userbooklog"
import "./Paging.css";
import Pagination from "react-js-pagination";
import { useParams } from "react-router-dom";

function UserBooklogListContainer() {
  const [order, setOrder] = useState("");
  const params = useParams().order;
  if (params !== order) {
    setOrder(params);
  }

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    setPage(page);
  };

  const [totalPage, setTotalPage] = useState(1);
  const size = 15;

  useEffect(() => {
    userbooklogList(
      {
        page: page,
        size: size,
      },
      (response) => {
        console.log(response);
        setTotalPage(response.data.data.totalPage);
        setData(response.data.data.booklogs);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [page, order, totalPage]);

  useEffect(() => {
    setPage(1);
  }, [order]);

  return (
    <>
      <UserBooklogListPresenter2 data={data} />
      <Pagination
        activePage={page}
        itemsCountPerPage={size}
        totalItemsCount={totalPage * size}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
      />
    </>
  );
}

export default UserBooklogListContainer;
