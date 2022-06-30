// import React from "react";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "../../context/UserContext";
import { actionTypes } from "../../constants/actionType";
import { loginUser } from "../../context/action";
const API_URL = `http://localhost:8000/api/users/`;
// const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTlkZTU5MzU2ZDQ1MDJlZDRmYjk3OSIsImlhdCI6MTY1NTMxNDA3MywiZXhwIjoxNjU3OTA2MDczfQ.HCHyY-KvCFCvkw3gJEidZhzi0mWNRHAmAJiAMrG2ie0`;
const Login = () => {
  const { userDispatch } = useUser();

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: " ",
    password: " ",
  });
  const { email, password } = formData;
  const changeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    const data = await loginUser(user);
    userDispatch({
      type: actionTypes.USER_LOGIN,
      payload: data,
    });
    navigate("/home");
  };

  return (
    <div>
      <h1>LOGIN</h1>
      <p>login and make todo</p>
      <form onSubmit={submitHandler}>
        <input
          name="email"
          type="email"
          placeholder="email"
          value={email}
          onChange={changeHandler}
        />
        <br />
        <input
          name="password"
          type="password"
          placeholder="pass"
          value={password}
          onChange={changeHandler}
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Login;
