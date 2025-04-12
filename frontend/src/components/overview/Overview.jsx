import React from "react";
import "./Overview.css";
import { useOutletContext } from "react-router-dom";
const Overview = () => {
  const university = useOutletContext();
  return (
    <div className="overview-container">
      <h3>Overview</h3>
      <div className="overview-section">
        <div>
          <div className="overview-section-details">
            <strong>
              {university.UGRADenrollmentNumber
                ? "UGrad.Enrollment"
                : "Enrollment"}
            </strong>
            <p>
              {university.UGRADenrollmentNumber
                ? university.UGRADenrollmentNumber
                : university.generalEnrollmentNumber}
            </p>
          </div>
          <hr />
          <div className="overview-section-details">
            <strong>City Location</strong>
            <p>
              <a
                href={university.cityLocation}
                target="_blank"
                rel="noopener noreferrer"
              >
                {university.cityName}
              </a>
            </p>
          </div>
          <hr />
          <div className="overview-section-details">
            <strong>Online</strong>
            <p>
              <a
                href={university.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
              >
                {university.websitePrefix}
              </a>
            </p>
          </div>
          <hr />
          <div className="overview-section-details">
            <strong>School Type</strong>
            <p>{university.type}</p>
          </div>
        </div>
        <div>
          <div className="overview-section-details">
            <strong>Duration</strong>
            <p>{university.duration}</p>
          </div>
          <hr />
          <div className="overview-section-details">
            <strong>Status</strong>
            <p>{university.status}</p>
          </div>
          <hr />
          <div className="overview-section-details">
            <strong>On Campus Housing</strong>
            <p>{university.onCampusHousing}</p>
          </div>
          <hr />
          <div className="overview-section-details">
            <strong>Level of Study</strong>
            <p>{university.levelOfStudy}</p>
          </div>
        </div>
      </div>
      <p className="university-overview-text">
        <strong>
          {university.name} ({university.nameAbbrivation})
        </strong>
        {university.overviewDescription}
      </p>
    </div>
  );
};

export default Overview;
