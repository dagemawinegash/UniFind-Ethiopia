import React from "react";
import "./TrackCollegeList.css";
import { FaHeart } from "react-icons/fa";

const TrackCollegeList = () => {
  return (
    <div className="track-college-list-container container">
      <h1>
        Track Your College List{" "}
        <FaHeart style={{ fontSize: "35px", paddingTop:"2px"}} />
      </h1>
      <p>
        Effortlessly organize and monitor your favorite Universities. Stay
        updated on admissions,and the latest news all in one place. Compare
        universities based on key factors, explore programs and majors, and make
        informed decisions with confidence. Whether you're searching for the
        perfect fit or tracking application progress, we've got you covered.
        Your college journey starts here-simplify your path to success!
      </p>

      <button className="btn">Get Started</button>
    </div>
  );
};

export default TrackCollegeList;
