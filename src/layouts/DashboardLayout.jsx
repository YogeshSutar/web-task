import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const DashboardLayout = (props) => {
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state.user.currentUser);
  console.log({ currentUser });

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  return currentUser ? <Outlet /> : null;
};

export default DashboardLayout;
