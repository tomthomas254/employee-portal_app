import React, { useEffect } from "react";
import { fetchData } from "../../Redux/paginationSlice";
import Dropdown from "react-bootstrap/Dropdown";
import Pagination from "../../components/Pagination";
import constants from "../../components/router.constants";
import { useSelector, useDispatch } from "react-redux";
import './index.css'
import { useNavigate } from "react-router-dom";

export default function Employees() {
  const data = useSelector((state) => state.pagination.data);
  const loading = useSelector((state) => state.pagination.loading);
  const error = useSelector((state) => state.pagination.error);
  const navigate=useNavigate()
  const displayData = data;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const handlePageClick = () => {
    dispatch(fetchData());
  };
  const handleItemClick = (target) => {
    navigate("/employees/details/"+target)
  };

  return (
    <>
      <div class="content-block">
        <section class="card">
          <div class="card-header">
            <h3>{constants.header.employee}</h3>
          </div>
          <div class="card-body">
            <ul class="grid-wrapper">
              <li class="grid-block">
                <div class="grid-block__item">{constants.header.name}</div>
                <div class="grid-block__item">{constants.header.id}</div>
                <div class="grid-block__item">{constants.header.email}</div>
                <div class="grid-block__item">
                  {constants.header.first_name}
                </div>
                <div class="grid-block__item">{constants.header.last_name}</div>
                <div class="grid-block__item">{constants.header.action}</div>
              </li>
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error: {error}</p>
              ) : (
                <>
                  {displayData.map((item) => (
                    <li className="grid-block" key={item.id}>
                      <div className="grid-block__item">
                        <div className="porofile-block">
                          <div className="porofile-block__image">
                            <span>
                              <img src={item.avatar} alt="imager" />
                            </span>
                          </div>
                          <div className="porofile-block__text">
                            <h3>{item.name}</h3>
                            <p>{item.role}</p>
                          </div>
                        </div>
                      </div>
                      <div className="grid-block__item">{item.id}</div>
                      <div className="grid-block__item">{item.email}</div>
                      <div className="grid-block__item">{item.first_name}</div>
                      <div className="grid-block__item">{item.last_name}</div>
                      <div className="grid-block__item">
                        <Dropdown>
                          <Dropdown.Toggle id="dropdown" className="dropdown">
                            <i className="fas fa-ellipsis-v"></i>
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item href="">
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="">
                              Something else
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div className="item-view">
                        <button onClick={() => handleItemClick(item.id)}>View Details</button>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
          <hr />
          <Pagination handlePageClick={handlePageClick} />
        </section>
      </div>
    </>
  );
}
