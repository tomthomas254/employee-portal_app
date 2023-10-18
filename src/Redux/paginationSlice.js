import { createSlice } from "@reduxjs/toolkit";
import NAME from "./Redux.constants";
import axios from "axios";
export const paginationSlice = createSlice({
  name: NAME,
  initialState: {
    currentPage: 1,
    data: [],
    loading: false,
    error: null,
    total_pages: 1,
  },
  reducers: {
    change_page: (state, action) => {
      state.currentPage = action.payload.currentPage;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setData: (state, action) => {
      state.data = action.payload.data;
      state.total_pages = action.payload.pages;
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const fetchData = () => {
  return async (dispatch, getState) => {
    const state = getState();
    console.log(state);
    dispatch(setLoading());
    await axios({
      url: `https://reqres.in/api/users?page=${state.pagination.currentPage}`,
      method: "GET",
    })
      .then(async (res) => {
        if (res.status === 200) {
          dispatch(
            setData({ data: res.data.data, pages: res.data.total_pages })
          );
        }
      })

      .catch((err) => {
        dispatch(setError(err));
      });
  };
};

export const { change_page, setLoading, setData, setError } =
  paginationSlice.actions;
export default paginationSlice.reducer;
