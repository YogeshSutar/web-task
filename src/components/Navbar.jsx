import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/slice/userSlice";
import logo from "../assets/Layer 133.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navData = [
    { id: "home", name: "Home", path: "/" },
    { id: "about", name: "About Us", path: "/about" },
    { id: "packages", name: "Our Package", path: "/packages" },
    { id: "subscription", name: "Subscription", path: "/subscription" },
    { id: "contact", name: "Contact", path: "/contact" },
    { id: "profile", name: "Profile", path: "/dashboard/profile" },
    { id: "logout", name: "Logout", path: "#" },
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
          item.id === "profile" || item.id === "logout" ? (
            <li key={item.id}>
              {item.id === "logout" ? (
                <button
                  className="hover:text-red-600 cursor-pointer"
                  onClick={handleLogout}
                >
                  {item.name}
                </button>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "text-red-600 font-bold" : "hover:text-red-600"
                  }
                >
                  {item.name}
                </NavLink>
              )}
            </li>
          ) : (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-red-600"
              >
                {item.name}
              </Link>
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
              item.id === "profile" || item.id === "logout" ? (
                <li key={item.id}>
                  {item.id === "logout" ? (
                    <button
                      className="block text-gray-800 hover:text-red-600"
                      onClick={() => {
                        setIsMenuOpen(false);
                        handleLogout();
                      }}
                    >
                      {item.name}
                    </button>
                  ) : (
                    <NavLink
                      to={item.path}
                      className="block text-gray-800 hover:text-red-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  )}
                </li>
              ) : (
                <li key={item.id}>
                  <Link
                    to={item.id}
                    smooth={true}
                    duration={500}
                    className="block text-gray-800 hover:text-red-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
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
