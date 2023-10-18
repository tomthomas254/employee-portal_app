import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import paginationReducer from "./paginationSlice";
import loginReducer from './loginSlice'
import registerReducer from './registerSlice'
export default configureStore({
  reducer: {
    pagination: paginationReducer,
    login: loginReducer,
    register:registerReducer,

  },
});
