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
      <nav className="details-nav">
        <Link to="overview">Overview</Link>
        <Link to="admissions">Admissions</Link>
        <Link to="majors">Majors</Link>
        <Link to="location">Location</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default UniversityDetails;
