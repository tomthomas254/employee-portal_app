import React, { useState } from "react";
import Form from "../../components/Form";
import "./index.css";
import { loginUser } from "../../Redux/loginSlice";
import { change_invalid } from "../../Redux/loginSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import constants from "../../components/router.constants";

export default function Login() {
  const navigate = useNavigate();
  let invalid = useSelector((state) => state.login.invalid);
  const errorMessage = useSelector((state) => state.login.error_message);
  const [show, setShow] = useState(false);
  let email = "";
  let password = "";
  const dispatch = useDispatch();
  const showHandleClick = () => {
    setShow(!show);
  };

  const handleEmailChange = (e) => {
    if (invalid) dispatch(change_invalid("false"));
    email += e.target.value;
  };
  const handlePasswordChange = (e) => {
    if (invalid) dispatch(change_invalid("false"));
    password = e.target.value;
  };

  const loginFunction = () => {
    dispatch(loginUser(email, password));
  };
  const handleClick = () => {
    navigate(constants.paths.register);
  };
  const handleForgetButtonClick = () => {
    navigate(constants.paths.forgetPassword);
  };
  return (
    <>
      <div className="login-content">
        <p className="login-content_header">Welcome to Employees-Portal</p>
        <div className="login-content_email">
          <Form
            icon={"fa fa-user"}
            placeholder={"Email"}
            type={"text"}
            changeFunction={(e) => handleEmailChange(e)}
          />
        </div>
        <div className="login-content_password">
          <Form
            icon={"fa fa-key"}
            placeholder={"Password"}
            type={show ? "text" : "password"}
            changeFunction={(e) => handlePasswordChange(e)}
          />
          <button className="login-content_show-eye" onClick={showHandleClick}>
            <i class="fa fa-eye" aria-hidden="true"></i>
          </button>
        </div>
        {invalid ? (
          <div className="login-content_invalid">
            <p>! {errorMessage}</p>
          </div>
        ) : (
          <></>
        )}

        <div className="login-content_login-button">
          <button onClick={loginFunction}>LOGIN</button>
        </div>
        <div className="login-content_registerForget">
          <button onClick={handleClick}>
            <p>Register</p>
          </button>
          <button onClick={handleForgetButtonClick}>
            <p>Forget Password?</p>
          </button>
        </div>
      </div>
    </>
  );
}
