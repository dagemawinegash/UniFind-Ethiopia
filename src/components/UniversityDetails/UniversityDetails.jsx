// UniversityDetails.jsx
import { Outlet, Link, useParams } from "react-router-dom";
import universityData from "../../../universities.json";

const UniversityDetails = () => {
  const { id } = useParams();
  const university = universityData.find((uni) => uni.id === parseInt(id));

  return (
    <div>
      <h1>{university.name}</h1>

      {/* Navigation Links */}
      <nav>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, doloribus.</p>
        <Link to="overview">Overview</Link>
        <Link to="admissions">Admissions</Link>
        <Link to="majors">Majors</Link> 
        <Link to="location">Location</Link> 
      </nav>

      {/* Outlet to render nested components like Overview */}
      <Outlet context={university} />
    </div>
  );
};

export default UniversityDetails;
