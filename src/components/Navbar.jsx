import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/slice/userSlice";
import logo from "../assets/Layer 133.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navData = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Package", path: "/packages" },
    { name: "Subscription", path: "/subscription" },
    { name: "Contact", path: "/contact" },
    { name: "Profile", path: "/dashboard/profile" },
    { name: "Logout", path: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <nav
      className={`fixed w-full z-50 flex justify-between px-5 md:px-[60px] transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-4 md:px-[20px]"
          : "bg-transparent py-6 top-3"
      }`}
    >
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className={`transition-all duration-300 ${
            isScrolled
              ? "h-12 w-auto"
              : "h-12 sm:h-[50px] md:h-[70px] lg:h-[110px] w-auto"
          }`}
        />
      </div>

      <ul className="hidden md:flex space-x-10 text-base font-semibold font-nunito">
        {navData.map((item) =>
          item.name === "Logout" ? (
            <li key={item.name}>
              <button
                className="hover:text-red-600 cursor-pointer"
                onClick={handleLogout}
              >
                {item.name}
              </button>
            </li>
          ) : (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "text-red-600 font-bold" : "hover:text-red-600"
                }
              >
                {item.name}
              </NavLink>
            </li>
          )
        )}
      </ul>

      <button
        className="md:hidden text-red-600 text-3xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        &#9776;
      </button>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col space-y-4 py-6 px-6 text-lg font-bold">
            {navData.map((item) =>
              item.name === "Logout" ? (
                <li key={item.name}>
                  <button
                    className="block text-gray-800 hover:text-red-600"
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleLogout();
                    }}
                  >
                    {item.name}
                  </button>
                </li>
              ) : (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className="block text-gray-800 hover:text-red-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
