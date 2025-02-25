import React from "react";
import Hero from "../Hero/Hero";
import Popular from "../Popular/Popular";
import TrackCollegeList from "../TrackCollegeList/TrackCollegeList";
import City from "../City/City";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <TrackCollegeList />
      <City />
      <Footer />
    </div>
  );
};

export default Home;
