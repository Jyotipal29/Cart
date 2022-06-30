import React, { useEffect } from "react";
import { getUser, getUserData } from "../../context/action";
import { useUser } from "../../context/UserContext";

const User = () => {
  const { user } = useUser();
  console.log(user.isLoggedIn);
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.isLogged}</p>
    </div>
  );
};

export default User;
