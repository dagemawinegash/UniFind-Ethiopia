import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { remove } from "../../store/listSlice";
import { FaLocationDot } from "react-icons/fa6";
import "./List.css";
import { FaHeartBroken } from "react-icons/fa";
import emptyList from "../../assets/empty-list.jpg";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const List = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const myLists = useSelector((state) => state.list);

  const removeFromList = (university) => {
    dispatch(remove({ id: university.id }));
    Swal.fire({
      icon: "success",
      title: "University Removed",
      text: `${university.name} has been removed from your list successfully!`,
    });
  };

  if (myLists.length === 0) {
    return (
      <div className="empty-list-container">
        <h2>Your List is Empty</h2>
        <p>Add your favorite universities to see them here!</p>
        <div className="empty-list-image">
          <img src={emptyList} alt="Empty list" />
        </div>
      </div>
    );
  }

  const universities = myLists.map((university) => (
    <div key={university.id} className="list-details-image">
      <img
        src={
          university.universityImage2
            ? university.universityImage2
            : university.universityImage1
        }
        alt={university.name}
      />
      <div className="list-details-content">
        <h1>{university.name}</h1>
        <p className="list-location">
          <FaLocationDot style={{ fontSize: "21px", marginRight: "5px" }} />
          {university.location}
        </p>
      </div>
      <div className="list-buttons">
        <button
          className="list-button list-button1"
          onClick={() => removeFromList(university)}
        >
          <FaHeartBroken
            style={{ fontSize: "17px", marginRight: "3px", paddingTop: "3px" }}
          />
          Remove from List
        </button>

        <button className="list-button list-button2">
          <Link to={`/university/${university.id}`}>See More</Link>
        </button>
      </div>
    </div>
  ));

  return (
    <div className="my-list-container container">
      <h1 className="page-title">My Favorite Universities</h1>
      <p className="page-description">
        Explore the universities you've added to your list. You can view more
        details or remove them from your list.
      </p>

      {universities}
    </div>
  );
};

export default List;
