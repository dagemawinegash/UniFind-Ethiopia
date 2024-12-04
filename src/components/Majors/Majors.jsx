import React from "react";
import "./Majors.css";
import { useOutletContext } from "react-router-dom";

const Majors = () => {
  const university = useOutletContext();
  const colleges = university.colleges;

  return (
    <div className="majors-container">
      <h3>Undergraduate Programs at {university.name}</h3>
      <p className="university-majors-text">{university.majorsDescription}</p>

      {colleges.map((college) => (
        <div key={college.name} className="college-category">
          <h3>
            {college.name} <span className="graduates-header">Graduates</span>
          </h3>

          {college.divisions ? (
            college.divisions.map((division) => (
              <div key={division.name} className="division-category">
                <h4 className="division-name">{division.name}</h4>
                <ul>
                  {division.majors.map((major) => (
                    <li key={major.name} className="major-item">
                      <span className="major-name">{major.name}</span>
                      <span className="graduate-count">{major.graduates}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <div className="college-majors">
              <ul>
                {college.majors.map((major) => (
                  <li key={major.name} className="major-item">
                    <span className="major-name">{major.name}</span>
                    <span className="graduate-count">{major.graduates}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Majors;
