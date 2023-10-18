import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { change_page } from "../../Redux/paginationSlice";

export default function Pagination({ handlePageClick }) {
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const pages = useSelector((state) => state.pagination.total_pages);
  const dispatch = useDispatch();
  const number = [...Array(pages + 1).keys()].slice(1);
  function prePage() {
    if (currentPage > 1) {
      dispatch(
        change_page({
          currentPage: currentPage - 1,
        })
      );
      handlePageClick();
    }
  }
  function nextPage() {
    if (currentPage < pages) {
      dispatch(
        change_page({
          currentPage: currentPage + 1,
        })
      );
      handlePageClick();
    }
  }
  function changePage(pageNumber) {
    dispatch(
      change_page({
        currentPage: pageNumber,
      })
    );
    handlePageClick();
  }
  return (
    <nav className="page">
      <ul className="pagination">
        <li className="page-item">
          <a className="pagelink" onClick={prePage}>
            {" "}
            Previous
          </a>
        </li>
        {number.map((n, i) => (
          <li key={i}>
            <a
              className={`page-item ${currentPage === n ? "pageactive" : ""}`}
              onClick={() => changePage(n)}
            >
              {n}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="pagelink" onClick={nextPage}>
            {" "}
            next
          </a>
        </li>
      </ul>
    </nav>
  );
}
