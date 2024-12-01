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

const Navbar = () => {
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const navigate = useNavigate();

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
      <nav className="navbar">
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
              <li className="btn my-list-btn home-page-list">My List</li>
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
              <li className="other-page-list">
                <button
                  onClick={() => goToPageAndScroll("my-list")}
                  className="btn goToPageAndScroll-btn"
                >
                  My List
                </button>
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
