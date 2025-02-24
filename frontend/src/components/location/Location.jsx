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
        <iframe
          src={university.mapLocation}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
