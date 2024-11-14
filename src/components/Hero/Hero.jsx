import UniversitySearch from "../UniversitySearch/UniversitySearch";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero container" name="hero">
      <div className="hero-text">
        <h2>Explore your future here</h2>
        <h4>
          Find the perfect university in Ethiopia to get started on your
          academic journey.
        </h4>
        <UniversitySearch/>
      </div>
    </div>
  );
};

export default Hero;
