import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import { change_loginState, change_logout, change_token } from "../../Redux/loginSlice";
import { change_page } from "../../Redux/paginationSlice";
import { useNavigate } from "react-router-dom";
import constants from "../router.constants";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = useSelector((state) => state.login.loginState);
  const handleButtonClick = () => {
    if (window.confirm(constants.messages.alertMessage) === true) {
      dispatch(change_logout(true))
      navigate(constants.paths.logout);
      dispatch(change_loginState());
      dispatch(change_token({ token: null }));
      dispatch(change_page({ currentPage: 1 }));
    }
  };
  return (
    <div>
      <header class="main-header">
        <div class="main-header__logo">
         
        </div>

        {login ? (
          <div class="main-header__signout">
            <a>
              <span class="image">
                <img
                  src="https://reqres.in/img/faces/4-image.jpg"
                  alt="imager"
                />
              </span>
              <button className="logout-button" onClick={handleButtonClick}>
                Logout
              </button>
            </a>
          </div>
        ) : (
          <></>
        )}
      </header>
    </div>
  );
}
