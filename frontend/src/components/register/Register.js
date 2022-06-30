import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../context/action";
import { useUser } from "../../context/UserContext";
import { actionTypes } from "../../constants/actionType";

// const API_URL = `http://localhost:8000/api/users/`;
// const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTlkZTU5MzU2ZDQ1MDJlZDRmYjk3OSIsImlhdCI6MTY1NTMxNDA3MywiZXhwIjoxNjU3OTA2MDczfQ.HCHyY-KvCFCvkw3gJEidZhzi0mWNRHAmAJiAMrG2ie0`;
const Register = () => {
  const { userDispatch } = useUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: " ",
    email: " ",
    password: " ",
  });
  const { name, email, password } = formData;
  const changeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const user = {
      name: name,
      email: email,
      password: password,
    };
    const data = await registerUser(user);
    userDispatch({
      type: actionTypes.USER_LOGIN,
      payload: data,
    });
    navigate("/home");
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={submitHandler}>
        <input
          name="name"
          type="text"
          placeholder="name"
          value={name}
          onChange={changeHandler}
        />
        <br />
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

export default Register;
