import React from "react";
import "./Majors.css";
import { useOutletContext } from "react-router-dom";

const Majors = () => {
  const university = useOutletContext();
  const colleges = university.colleges || [];
  const creditPoints = university.creditPoints;

  return (
    <div className="majors-container">
      <h3>Undergraduate Programs at {university.name}</h3>
      <p className="university-majors-text">{university.majorsDescription}</p>

      {colleges.map(
        (college, collegeIndex) =>
          college.name && (
            <div
              key={`${college.name}-${collegeIndex}`}
              className="college-category"
            >
              <h3>
                {college.name}{" "}
                <span className="graduates-header">
                  {creditPoints === "Credit-Hours" ? "Min. Cr.hrs" : "ECTS"}
                  /Yrs
                </span>
              </h3>

              <div className="college-majors">
                <ul>
                  {college.majors.map(
                    (major, majorIndex) =>
                      major.name && (
                        <li
                          key={`${major.name}-${majorIndex}`}
                          className="major-item"
                        >
                          <span className="major-name">{major.name}</span>
                          <span className="credit-hours-count">
                            {creditPoints === "Credit-Hours"
                              ? major.creditHours
                              : major.ECTS}
                          </span>
                        </li>
                      )
                  )}
                </ul>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Majors;
