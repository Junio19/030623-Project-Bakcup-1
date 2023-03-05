import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../feature/user";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({
              name: "Shake",
              age: 20,
              email: "shakemates@rocketmail.com",
            })
          );
        }}
      >
        Login
      </button>

      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Login;
