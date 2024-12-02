import React from "react";
import "./Majors.css";

const majors = [
  [
    "Computer and Information Sciences",
    { name: "Computer Science", graduates: 36 },
  ],
  [
    "Engineering",
    { name: "Bioengineering and Biomedical Engineering", graduates: 4 },
    { name: "Engineering Science", graduates: 38 },
  ],
  [
    "Foreign Languages",
    { name: "Linguistics", graduates: 13 },
    { name: "Comparative Literature", graduates: 15 },
    { name: "Slavic Languages, Literatures, and Linguistics", graduates: 7 },
  ],
];

const Majors = () => {
  return (
    <div className="majors-container">
      <h3>Undergraduate majors at Addis Ababa University</h3>
      <p className="university-majors-text">
        The most popular undergraduate major at Addis Ababa University is
        Accounting and Finance, followed by Computer Science and Engineering.
        These programs continue to attract a significant number of students due
        to their relevance in Ethiopia’s growing economy and technological
        advancements. A list of all 40 available majors and annual graduates is
        presented below. Also of interest are the median earnings for Addis
        Ababa University graduates by major, which highlight the diverse career
        opportunities available to its alumni.
      </p>

      {majors.map((category) => (
        <div key={category[0]} className="major-category">
          <h3>
            {category[0]} <span className="graduates-header">Graduates</span>
          </h3>
          <ul>
            {category.slice(1).map((major) => (
              <li key={major.name} className="major-item">
                <span className="major-name">{major.name}</span>
                <span className="graduate-count">{major.graduates}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Majors;
