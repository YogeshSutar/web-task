import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserFormTemplate from "../components/UserFormTemplate";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../Redux/slice/userSlice";

const Login = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const handleRegistraionBtn = () => {
    Navigate("/register");
  };
  const [userForm, setUserForm] = useState({ username: "", password: "" });
  const onChange = (event, name) => {
    setUserForm((prev) => {
      return { ...prev, [name]: event.target.value };
    });
  };
  const onSubmit = () => {
    if (userForm.password && userForm.username) {
      console.log("the values are ", userForm);
    }

    dispatch(logIn(userForm));
    const loggedInUser = users.find(
      (user) =>
        user.username === userForm.username &&
        user.password === userForm.password
    );
    if (loggedInUser) {
      alert("Login successful!");
      localStorage.setItem("auth", true);
      Navigate("/dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };
  const NumberOfInputs = [
    { name: "username", type: "text", placeholder: "Enter Username" },
    { name: "password", type: "password", placeholder: "Enter Password" },
  ];
  const footerValue = "Sign Up";
  return (
    <div className="w-full h-full">
      <UserFormTemplate
        title={"LOGIN"}
        onChange={onChange}
        userForm={userForm}
        textArray={NumberOfInputs}
        handleRegistraionBtn={handleRegistraionBtn}
        onSubmit={onSubmit}
        footerValue={footerValue}
        footerTitle="Don't have an account ?"
      />
    </div>
  );
};

export default Login;
