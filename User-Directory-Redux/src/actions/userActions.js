import { FETCH_USERS, NEW_USER, DELETE_USER } from "./types";
import axios from "axios";

export const fetchUsers = () => async (dispatch) => {
  console.log("Fetching users...");
  const res = await axios.get("http://localhost:5000/userInfo");
  dispatch({
    type: FETCH_USERS,
    payload: res.data,
  });
};

export const createNewUser = (userData) => async (dispatch) => {
  console.log("Creating new user...");
  const newUser = await axios.post("http://localhost:5000/userInfo", {
    name: userData.name,
    email: userData.email,
    contactNumber: userData.contactNumber,
  });

  dispatch({ type: NEW_USER, payload: newUser.data });
};

export const deleteUser = (userID) => async (dispatch) => {
  console.log("Delete User...");
  const res = axios.delete(`http://localhost:5000/userInfo/${userID}`);
  dispatch({ type: DELETE_USER, payload: userID });
};
