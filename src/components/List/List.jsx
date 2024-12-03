import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { remove } from "../../store/listSlice";
import { FaLocationDot } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import "./list.css";
import emptyList from "../../assets/empty-list.jpg";
import { Link } from "react-router-dom";

const List = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const myLists = useSelector((state) => state.list);

  const removeFromList = (university) => {
    dispatch(remove({ id: university.id }));
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
      <img src={university.image} alt={university.name} />
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
          <FaHeart style={{ fontSize: "18px", paddingTop: "5px" }} /> Remove
          from List
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
