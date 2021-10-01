import { AUTH_USER, AUTH_ERROR } from "./types";
import axiosInstance from "../API/axios";

export const signup = (formValues, callback) => async (dispatch) => {
  try {
    const response = await axiosInstance.post("auth/login", formValues);
    dispatch({
      type: AUTH_USER,
      payload: response.data.Authorization,
    });
    localStorage.setItem("token", response.data.Authorization);
    callback();
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
      payload: e.message,
    });
  }
};
