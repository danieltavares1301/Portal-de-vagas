import api from "./api";
import jwt from "jwt-decode";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//const navigate = useNavigate();
export const TOKEN_KEY = "@user-Token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getId = () => localStorage.getItem("id");

export const login = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
  return 0;
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const signIn = (params, config) => {
  return new Promise((resolve, reject) => {
    api
      .post("/login", params, config)
      .then((response) => {
        if (response.data) {
          login(response.data.access_token);
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getUserData = () => {
  const idUser = getId();
  return new Promise((resolve, reject) => {
    api
      .get(`/user/id?id=${idUser}`)
      .then((response) => {
        resolve(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
