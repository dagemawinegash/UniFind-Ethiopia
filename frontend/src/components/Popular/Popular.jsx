import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import "./Popular.css";
import { Link } from "react-router-dom";
import { universityData } from "../../../universities";
export default function Popular() {
  return (
    <div name="popular">
      <div className="title">
        <h1>Popular Universities in Ethiopia</h1>
        <p>
          Discover Ethiopia's leading universities, where academic excellence
          meets vibrant campus life and diverse opportunities for growth!
        </p>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        freeMode={true}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper container"
        breakpoints={{
          500: {
            slidesPerView: 2,
          },
          700: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide key={universityData[0].id} className="popular-card">
          <Link
            to={`/university/${universityData[0].id}`}
            className="popular-card-image"
          >
            <img
              src={
                universityData[0].universityImage1 != null
                  ? universityData[0].universityImage1
                  : universityData[0].universityImage2
              }
              alt={universityData[0].name}
            />
            <span className="popular-card-location">
              {universityData[0].location}
            </span>
          </Link>
          <div className="popular-card-body">
            <h3>{universityData[0].name}</h3>
            <p>
              {universityData[0].type} {universityData[0].duration}
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide key={universityData[1].id} className="popular-card">
          <Link
            to={`/university/${universityData[1].id}`}
            className="popular-card-image"
          >
            <img
              src={
                universityData[1].universityImage1 != null
                  ? universityData[1].universityImage1
                  : universityData[1].universityImage2
              }
              alt={universityData[1].name}
            />
            <span className="popular-card-location">
              {universityData[1].location}
            </span>
          </Link>
          <div className="popular-card-body">
            <h3>{universityData[1].name}</h3>
            <p>
              {universityData[1].type} {universityData[1].duration}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide key={universityData[2].id} className="popular-card">
          <Link
            to={`/university/${universityData[2].id}`}
            className="popular-card-image"
          >
            <img
              src={
                universityData[2].universityImage1 != null
                  ? universityData[2].universityImage1
                  : universityData[2].universityImage2
              }
              alt={universityData[2].name}
            />
            <span className="popular-card-location">
              {universityData[2].location}
            </span>
          </Link>
          <div className="popular-card-body">
            <h3>{universityData[2].name}</h3>
            <p>
              {universityData[2].type} {universityData[2].duration}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </div>
  );
}
