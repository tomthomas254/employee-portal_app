import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import constants from "../../components/router.constants";
import { useDispatch } from "react-redux";
import { change_logout } from "../../Redux/loginSlice";
export default function EmployeeDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(change_logout(false))
    navigate(constants.paths.login);
  };
  return (
    <>
      <div class="content-block">
        <section class="card">
          <div class="card-body">
            <div className="logout-name">
              <h3>Logged Out Successfully.</h3>
            </div>
            <button className="logout-login_button" onClick={handleClick}>Login Again</button>
          </div>
        </section>
      </div>
    </>
  );
}
