import { Outlet, Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./UniversityDetails.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../store/listSlice";
import api from "../../api";
import Swal from "sweetalert2";

const UniversityDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const favoriteList = useSelector((state) => state.list);

  const [university, setUniversity] = useState({});

  useEffect(() => {
    getUniversity();
  }, []);

  const getUniversity = () => {
    api
      .get(`/api/universities/${id}/`)
      .then((res) => res.data)
      .then((data) => {
        setUniversity(data);
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!university) {
    return <div>University not found!</div>;
  }

  const addToList = () => {
    const exists = favoriteList.some((uni) => uni.id === university.id);

    if (exists) {
      Swal.fire({
        icon: "warning",
        title: "Already Added!",
        text: `${university.name} is already in your list.`,
        confirmButtonColor: "#3085d6",
      });
    } else {
      dispatch(add(university));
      Swal.fire({
        icon: "success",
        title: "Added!",
        text: `${university.name} has been added to your list successfully!`,
        confirmButtonColor: "#3085d6",
      });
    }
  };

  return (
    <div className="university-details container">
      <div className="university-details-image">
        <img
          src={
            university.universityImage2
              ? university.universityImage2
              : university.universityImage1
          }
          alt={university.name}
        />
        {console.log(university.universityImage1)}
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
        </nav>
        <div className="main-content">
          <Outlet context={university} />
        </div>
      </div>
    </div>
  );
};

export default UniversityDetails;
