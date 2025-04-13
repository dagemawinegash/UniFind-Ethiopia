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
  // console.log(universityData);

  var popular_universities = [];

  if (universityData.length > 0) {
    const popular_university_ids = [1, 2, 3, 10, 19, 21, 23, 30];
    popular_universities = universityData.filter((university) =>
      popular_university_ids.includes(university.id)
    );
  }

  // console.log(popular_universities);

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
          <SwiperSlide
            key={popular_universities[0].id}
            className="popular-card"
          >
            <Link
              to={`/university/${popular_universities[0].id}`}
              className="popular-card-image"
            >
              <img
                src={
                  popular_universities[0].universityImage1
                    ? popular_universities[0].universityImage1
                    : popular_universities[0].universityImage2
                }
                alt={popular_universities[0].name}
              />
              <span className="popular-card-location">
                {popular_universities[0].cityName}
              </span>
            </Link>
            <div className="popular-card-body">
              <h3>{popular_universities[0].name}</h3>
              <p>
                {popular_universities[0].type}{" "}
                {popular_universities[0].duration}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide
            key={popular_universities[1].id}
            className="popular-card"
          >
            <Link
              to={`/university/${popular_universities[1].id}`}
              className="popular-card-image"
            >
              <img
                src={
                  popular_universities[1].universityImage1
                    ? popular_universities[1].universityImage1
                    : popular_universities[1].universityImage2
                }
                alt={popular_universities[1].name}
              />
              <span className="popular-card-location">
                {popular_universities[1].cityName}
              </span>
            </Link>
            <div className="popular-card-body">
              <h3>{popular_universities[1].name}</h3>
              <p>
                {popular_universities[1].type}{" "}
                {popular_universities[1].duration}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide
            key={popular_universities[2].id}
            className="popular-card"
          >
            <Link
              to={`/university/${popular_universities[2].id}`}
              className="popular-card-image"
            >
              <img
                src={
                  popular_universities[2].universityImage1
                    ? popular_universities[2].universityImage1
                    : popular_universities[2].universityImage2
                }
                alt={popular_universities[2].name}
              />
              <span className="popular-card-location">
                {popular_universities[2].cityName}
              </span>
            </Link>
            <div className="popular-card-body">
              <h3>{popular_universities[2].name}</h3>
              <p>
                {popular_universities[2].type}{" "}
                {popular_universities[2].duration}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide
            key={popular_universities[3].id}
            className="popular-card"
          >
            <Link
              to={`/university/${popular_universities[3].id}`}
              className="popular-card-image"
            >
              <img
                src={
                  popular_universities[3].universityImage1
                    ? popular_universities[3].universityImage1
                    : popular_universities[3].universityImage2
                }
                alt={popular_universities[3].name}
              />
              <span className="popular-card-location">
                {popular_universities[3].cityName}
              </span>
            </Link>
            <div className="popular-card-body">
              <h3>{popular_universities[3].name}</h3>
              <p>
                {popular_universities[3].type}{" "}
                {popular_universities[3].duration}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide
            key={popular_universities[4].id}
            className="popular-card"
          >
            <Link
              to={`/university/${popular_universities[4].id}`}
              className="popular-card-image"
            >
              <img
                src={
                  popular_universities[4].universityImage1
                    ? popular_universities[4].universityImage1
                    : popular_universities[4].universityImage2
                }
                alt={popular_universities[4].name}
              />
              <span className="popular-card-location">
                {popular_universities[4].cityName}
              </span>
            </Link>
            <div className="popular-card-body">
              <h3>{popular_universities[4].name}</h3>
              <p>
                {popular_universities[4].type}{" "}
                {popular_universities[4].duration}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide
            key={popular_universities[5].id}
            className="popular-card"
          >
            <Link
              to={`/university/${popular_universities[5].id}`}
              className="popular-card-image"
            >
              <img
                src={
                  popular_universities[5].universityImage1
                    ? popular_universities[5].universityImage1
                    : popular_universities[5].universityImage2
                }
                alt={popular_universities[5].name}
              />
              <span className="popular-card-location">
                {popular_universities[5].cityName}
              </span>
            </Link>
            <div className="popular-card-body">
              <h3>{popular_universities[5].name}</h3>
              <p>
                {popular_universities[5].type}{" "}
                {popular_universities[5].duration}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide
            key={popular_universities[6].id}
            className="popular-card"
          >
            <Link
              to={`/university/${popular_universities[6].id}`}
              className="popular-card-image"
            >
              <img
                src={
                  popular_universities[6].universityImage1
                    ? popular_universities[6].universityImage1
                    : popular_universities[6].universityImage2
                }
                alt={popular_universities[6].name}
              />
              <span className="popular-card-location">
                {popular_universities[6].cityName}
              </span>
            </Link>
            <div className="popular-card-body">
              <h3>{popular_universities[6].name}</h3>
              <p>
                {popular_universities[6].type}{" "}
                {popular_universities[6].duration}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide
            key={popular_universities[7].id}
            className="popular-card"
          >
            <Link
              to={`/university/${popular_universities[7].id}`}
              className="popular-card-image"
            >
              <img
                src={
                  popular_universities[7].universityImage1
                    ? popular_universities[7].universityImage1
                    : popular_universities[7].universityImage2
                }
                alt={popular_universities[7].name}
              />
              <span className="popular-card-location">
                {popular_universities[7].cityName}
              </span>
            </Link>
            <div className="popular-card-body">
              <h3>{popular_universities[7].name}</h3>
              <p>
                {popular_universities[7].type}{" "}
                {popular_universities[7].duration}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  );
}
