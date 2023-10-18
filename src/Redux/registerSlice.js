import { createSlice } from "@reduxjs/toolkit";
import NAME from "./Redux.constants";
import axios from "axios";

export const registerSlice = createSlice({
  name: "NAME",
  initialState: {
    successState: false,
    errorState: false,
  },
  reducers: {
    change_successState: (state, action) => {
      state.successState = action.payload;
    },
    change_errorState: (state, action) => {
      state.errorState = action.payload;
    },
  },
});

export const registerUser = (email, password) => {
  return async (dispatch) => {
    await axios({
      url: "https://reqres.in/api/register",
      method: "POST",
      data: {
        email: email,
        password: password,
      },
    })
      .then(async (res) => {
        if (res.status === 200) {
          await dispatch(change_successState(true));
        }
      })

      .catch((err) => {
        dispatch(change_errorState(true));
      });
  };
};
export const { change_successState, change_errorState, change_errorMessage } =
  registerSlice.actions;
export default registerSlice.reducer;
