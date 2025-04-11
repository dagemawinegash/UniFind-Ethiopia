import React from "react";
import Hero from "../../components/Hero/Hero";
import Popular from "../../components/Popular/Popular";
import TrackCollegeList from "../../components/TrackCollegeList/TrackCollegeList";
import City from "../../components/City/City";
import Footer from "../../components/Footer/Footer";

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
