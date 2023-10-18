import React, { useState, useEffect } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/";
import { registerUser } from "../../Redux/registerSlice";
import { useSelector, useDispatch } from "react-redux";
import { change_errorState } from "../../Redux/registerSlice";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [invalid, setInvalid] = useState(false);
  let error = useSelector((state) => state.register.errorState);
  let success = useSelector((state) => state.register.successState);
  let name = "";
  let role = "";
  let email = "";
  let password = "";

  useEffect(() => {
    if (success) {
      alert("User Registered Successfully");
      navigate("/login");
    } else if (error) {
      alert("! Registration Failed");
    }
  }, [success, error, navigate]);

  const handleEmailChange = (e) => {
    if (error) dispatch(change_errorState(false));
    setInvalid(false);
    email += e.target.value;
  };
  const handlePasswordChange = (e) => {
    if (error) dispatch(change_errorState(false));
    setInvalid(false);
    password = e.target.value;
  };
  const handleNameChange = (e) => {
    if (error) dispatch(change_errorState(false));
    setInvalid(false);
    name = e.target.value;
  };
  const handleRoleChange = (e) => {
    if (error) dispatch(change_errorState(false));
    setInvalid(false);
    role = e.target.value;
  };
  const handleButttonClick = () => {
    if (name === "" || role === "" || email === "" || password === "") {
      setInvalid(true);
    } else {
      setInvalid(false);
      dispatch(registerUser(email, password));
    }
  };
  return (
    <>
      <div className="register-content">
        <p className="register-content_header">Register Here!</p>
        <div className="register-content_input">
          <Form
            type={"text"}
            placeholder={"Name"}
            value={name}
            icon={"fa fa-user circle"}
            changeFunction={(e) => handleNameChange(e)}
          />
        </div>
        <div className="register-content_input">
          <Form
            type={"text"}
            placeholder={"Role"}
            value={role}
            icon={"fa fa-user-tie circle"}
            changeFunction={(e) => handleRoleChange(e)}
          />
        </div>
        <div className="register-content_input">
          <Form
            type={"text"}
            placeholder={"Email"}
            icon={"fa fa-envelope circle"}
            changeFunction={(e) => handleEmailChange(e)}
          />
        </div>
        <div className="register-content_input">
          <Form
            type={"password"}
            placeholder={"Password"}
            icon={"fa fa-key circle"}
            changeFunction={(e) => handlePasswordChange(e)}
          />
        </div>
        {invalid ? (
          <div className="register-content_invalid">
            <p>! Required Fields Missing</p>
          </div>
        ) : (
          <></>
        )}

        <button
          className="register-content_button"
          onClick={handleButttonClick}
        >
          Register
        </button>
      </div>
    </>
  );
}
