import { Outlet, Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { universityData } from "../../../universities";
import "./universityDetails.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../store/listSlice";


const UniversityDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);
  console.log(list);

  const university = universityData.find((uni) => uni.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!university) {
    return <div>University not found!</div>;
  }

  const addToList = () => {
    dispatch(add(university));
  };

  return (
    <div className="university-details container">
      <div className="university-details-image">
        <img src={university.universityImage} alt={university.name} />
        <div className="university-details-content">
          <h1>{university.name}</h1>
          <p className="location">
            <FaLocationDot style={{ fontSize: "21px", marginRight: "5px" }} />
            {university.location}
          </p>
        </div>
        <div className="buttons">
          <button className="button button1" onClick={addToList}>
            <FaHeart style={{ fontSize: "18px", paddingTop: "5px" }} /> Add to
            Your List
          </button>
          <button
            className="button button2"
            onClick={() => {
              window.open(university.officialWebsite, "_blank");
            }}
          >
            Connect
          </button>
        </div>
      </div>
      <div className="details-layout">
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

        <div className="main-content">
          <Outlet context={university} />
        </div>
      </div>
    </div>
  );
};

export default UniversityDetails;
