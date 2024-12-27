import React from "react";
import Hero from "../Hero/Hero";
import Popular from "../Popular/Popular";
import TrackCollegeList from "../TrackCollegeList/TrackCollegeList";
import City from "../City/City";
import PostUniversityComponent from "../PostUniversityComponent";

const Home = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <TrackCollegeList />
      <City />
      <PostUniversityComponent />
    </div>
  );
};

export default Home;
