import { createSlice } from "@reduxjs/toolkit";
import NAME from "./Redux.constants";
import axios from "axios";

export const loginSlice = createSlice({
  name: NAME,
  initialState: {
    loginState: false,
    token: null,
    invalid: false,
    error_message: null,
    logout:false
  },
  reducers: {
    change_loginState: (state) => {
      state.loginState = !state.loginState;
    },
    change_token: (state, action) => {
      state.token = action.payload.token;
    },
    change_invalid: (state, action) => {
      state.invalid = action.payload;
    },
    change_errorMessage: (state, action) => {
      state.error_message = action.payload.message;
    },
    change_logout:(state,action)=>{
      state.logout = action.payload
    },
  },
});

export const loginUser = (email, password) => {
  return (dispatch) => {
    axios({
      url: "https://reqres.in/api/login",
      method: "POST",
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          dispatch(change_loginState());
          dispatch(
            change_token({
              token: res.data.token,
            })
          );
        }
      })

      .catch((err) => {
        dispatch(change_invalid("true"));
        dispatch(change_errorMessage({ message: err.response.data.error }));
      });
  };
};

export const {
  change_loginState,
  change_invalid_password,
  change_token,
  change_invalid,
  change_errorMessage,
  change_logout
} = loginSlice.actions;
export default loginSlice.reducer;
