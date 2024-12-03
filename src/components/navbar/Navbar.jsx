import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import {
  Link as RouterLink,
  useLocation,
  useNavigate,
  Outlet,
} from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { scroller } from "react-scroll";
import { useSelector } from "react-redux";

const Navbar = () => {
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const navigate = useNavigate();
  const myLists = useSelector((state) => state.list);
  const count = myLists.length;

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (location === "") {
        setSticky(window.scrollY > 50);
      }
    };

    if (location === "") {
      window.addEventListener("scroll", handleScroll);
    } else {
      setSticky(true);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  const goToPageAndScroll = async (selector) => {
    await navigate("/");
    await scroller.scrollTo(selector, {
      duration: 500,
      smooth: true,
      offset: 0,
      spy: true,
    });
  };

  return (
    <>
      <nav className={`navbar ${sticky ? "dark-nav" : ""}`}>
        <img src={logo} alt="" className="logo" />
        <ul>
          {location === "" ? (
            <>
              <li className="home-page-list">
                <ScrollLink
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Home
                </ScrollLink>
              </li>
              <li className="home-page-list">
                <ScrollLink
                  to="popular"
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Popular
                </ScrollLink>
              </li>
              <li className="home-page-list">News</li>
              <li className="home-page-list">
                <ScrollLink
                  to="city"
                  smooth={true}
                  offset={-105}
                  duration={500}
                >
                  City
                </ScrollLink>
              </li>
              <li className="btn my-list-btn home-page-list">
                <RouterLink to="/lists">My List {count}</RouterLink>
              </li>
            </>
          ) : (
            <>
              <li className="other-page-list">
                <button onClick={() => goToPageAndScroll("home")}>Home</button>
              </li>
              <li className="other-page-list">
                <button onClick={() => goToPageAndScroll("popular")}>
                  Popular
                </button>
              </li>
              <li className="other-page-list">
                <button onClick={() => goToPageAndScroll("news")}>News</button>
              </li>
              <li className="other-page-list">
                <button onClick={() => goToPageAndScroll("city")}>City</button>
              </li>
              <li className="btn my-list-btn home-page-list">
                <RouterLink to="/lists">My List {count}</RouterLink>
              </li>
            </>
          )}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
