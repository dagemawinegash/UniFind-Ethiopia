import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import "./Popular.css";
import { Link } from "react-router-dom";
import api from "../../api";

export default function Popular() {
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

  return (
    <div name="popular">
      <div className="title">
        <h1>Popular Universities in Ethiopia</h1>
        <p>
          Discover Ethiopia's leading universities, where academic excellence
          meets vibrant campus life and diverse opportunities for growth!
        </p>
      </div>

      {universityData.length > 0 && (
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
                  universityData[0].universityImage1
                    ? universityData[0].universityImage1
                    : universityData[0].universityImage2
                }
                alt={universityData[0].name}
              />
              <span className="popular-card-location">
                {universityData[0].cityName}
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
                  universityData[1].universityImage1
                    ? universityData[1].universityImage1
                    : universityData[1].universityImage2
                }
                alt={universityData[1].name}
              />
              <span className="popular-card-location">
                {universityData[1].cityName}
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
                  universityData[2].universityImage1
                    ? universityData[2].universityImage1
                    : universityData[2].universityImage2
                }
                alt={universityData[2].name}
              />
              <span className="popular-card-location">
                {universityData[2].cityName}
              </span>
            </Link>
            <div className="popular-card-body">
              <h3>{universityData[2].name}</h3>
              <p>
                {universityData[2].type} {universityData[2].duration}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide key={universityData[9].id} className="popular-card">
            <Link
              to={`/university/${universityData[9].id}`}
              className="popular-card-image"
            >
              <img
                src={
                  universityData[9].universityImage1
                    ? universityData[9].universityImage1
                    : universityData[9].universityImage2
                }
                alt={universityData[9].name}
              />
              <span className="popular-card-location">
                {universityData[9].cityName}
              </span>
            </Link>
            <div className="popular-card-body">
              <h3>{universityData[9].name}</h3>
              <p>
                {universityData[9].type} {universityData[9].duration}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide key={universityData[18].id} className="popular-card">
            <Link
              to={`/university/${universityData[18].id}`}
              className="popular-card-image"
            >
              <img
                src={
                  universityData[18].universityImage1
                    ? universityData[18].universityImage1
                    : universityData[18].universityImage2
                }
                alt={universityData[18].name}
              />
              <span className="popular-card-location">
                {universityData[18].cityName}
              </span>
            </Link>
            <div className="popular-card-body">
              <h3>{universityData[18].name}</h3>
              <p>
                {universityData[18].type} {universityData[18].duration}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide key={universityData[20].id} className="popular-card">
            <Link
              to={`/university/${universityData[20].id}`}
              className="popular-card-image"
            >
              <img
                src={
                  universityData[20].universityImage1
                    ? universityData[20].universityImage1
                    : universityData[20].universityImage2
                }
                alt={universityData[20].name}
              />
              <span className="popular-card-location">
                {universityData[20].cityName}
              </span>
            </Link>
            <div className="popular-card-body">
              <h3>{universityData[20].name}</h3>
              <p>
                {universityData[20].type} {universityData[20].duration}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide key={universityData[22].id} className="popular-card">
            <Link
              to={`/university/${universityData[22].id}`}
              className="popular-card-image"
            >
              <img
                src={
                  universityData[22].universityImage1
                    ? universityData[22].universityImage1
                    : universityData[22].universityImage2
                }
                alt={universityData[22].name}
              />
              <span className="popular-card-location">
                {universityData[22].cityName}
              </span>
            </Link>
            <div className="popular-card-body">
              <h3>{universityData[22].name}</h3>
              <p>
                {universityData[22].type} {universityData[22].duration}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide key={universityData[29].id} className="popular-card">
            <Link
              to={`/university/${universityData[29].id}`}
              className="popular-card-image"
            >
              <img
                src={
                  universityData[29].universityImage1
                    ? universityData[29].universityImage1
                    : universityData[29].universityImage2
                }
                alt={universityData[29].name}
              />
              <span className="popular-card-location">
                {universityData[29].cityName}
              </span>
            </Link>
            <div className="popular-card-body">
              <h3>{universityData[29].name}</h3>
              <p>
                {universityData[29].type} {universityData[29].duration}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  );
}
