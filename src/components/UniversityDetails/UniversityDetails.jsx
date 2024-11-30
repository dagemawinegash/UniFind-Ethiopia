import { Outlet, Link, useParams } from "react-router-dom";
import { universityData } from "../../../universities";
import "./universityDetails.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const UniversityDetails = () => {
  const { id } = useParams();
  const university = universityData.find((uni) => uni.id === parseInt(id));

  return (
    <div className="university-details container">
      <div className="university-details-image">
        <img src={university.image} alt={university.name} />
        <div className="university-details-content">
          <h1>{university.name}</h1>
          <p className="location">
            <FaLocationDot style={{ fontSize: "21px", marginRight: "5px" }} />
            {university.location}
          </p>
        </div>
        <div className="buttons">
          <button className="button button1">
            {" "}
            <FaHeart style={{ fontSize: "18px", paddingTop: "5px" }} /> Add to
            Your List
          </button>
          <button className="button button2">Connect</button>
        </div>
      </div>
      <div className="details-layout">
        {/* Sidebar */}
        <nav className="sidebar">
          <Link
            to="overview"
            className={location.pathname.includes("overview") ? "active" : ""}
          >
            Overview
          </Link>
          <Link
            to="admissions"
            className={location.pathname.includes("admissions") ? "active" : ""}
          >
            Admissions
          </Link>
          <Link
            to="majors"
            className={location.pathname.includes("majors") ? "active" : ""}
          >
            Majors
          </Link>
          <Link
            to="location"
            className={location.pathname.includes("location") ? "active" : ""}
          >
            Location
          </Link>
          <Link
            to="diversity"
            className={location.pathname.includes("diversity") ? "active" : ""}
          >
            Diversity
          </Link>
          <Link
            to="reviews"
            className={location.pathname.includes("reviews") ? "active" : ""}
          >
            Reviews
          </Link>
        </nav>

        {/* Main Content */}
        <div className="main-content">
          <Outlet context={university} />
        </div>
      </div>
    </div>
  );
};

export default UniversityDetails;
