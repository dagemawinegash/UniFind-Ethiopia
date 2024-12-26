import React from "react";
import "./Location.css";
import { useOutletContext } from "react-router-dom";

const Location = () => {
  const university = useOutletContext();
  return (
    <div className="location-section">
      <h3>Location of {university.name}</h3>
      <div className="location-description">
        <p>{university.locationDescription}</p>
        <p>
          <strong>Address: </strong>
          {university.address}
        </p>
        <p>
          <strong>Established: </strong>
          {university.establishedIn}
        </p>
        <p>
          <strong>Setting: </strong>
          {university.setting}
        </p>
      </div>
      <div className="map-container">
        <a
          href={university.mapLocation}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={university.mapImage}
            alt={`Map of ${university.name}`}
            className="map-image"
          />
          <div className="hover-text">View Larger Map</div>
        </a>
      </div>
    </div>
  );
};

export default Location;
