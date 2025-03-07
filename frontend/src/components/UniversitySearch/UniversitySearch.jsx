import React, { useState, useEffect } from "react";
import "./UniversitySearch.css";
import { Link } from "react-router-dom";
import api from "../../api";

const UniversitySearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [universityData, setUniversityData] = useState([]);
  useEffect(() => {
    getUniversities();
  }, []);

  const getUniversities = () => {
    api
      .get(`/api/universities/`)
      .then((res) => res.data)
      .then((data) => {
        setUniversityData(data);
      })
      .catch((err) => alert(err));
  };

  const handleSearch = (e) => {
    const input = e.target.value;
    setQuery(input);

    if (input.length > 0) {
      const filtered = universityData.filter((uni) =>
        uni.name.toLowerCase().startsWith(input.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="uni-search-container">
      <div className="uni-search">
        <input
          type="text"
          className="uni-search-input"
          placeholder="Search for a university here...."
          value={query}
          onChange={handleSearch}
        />
        <button className="uni-search-button">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>

      <ul className="uni-search-results">
        {results.map((uni) => (
          <Link to={`/university/${uni.id}`} key={uni.id}>
            <li>{uni.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default UniversitySearch;
