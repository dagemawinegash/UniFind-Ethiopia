import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./City.css";
import { Pagination, Navigation } from "swiper/modules";
import api from "../../api";

const City = () => {
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

  var popular_cities = [];

  if (universityData.length > 0) {
    const popular_city_ids = [1, 2, 10, 19, 21, 23, 30];
    popular_cities = universityData.filter((university) =>
      popular_city_ids.includes(university.id)
    );
  }

  // console.log(popular_cities);
  return (
    <div name="city">
      <div className="cities-title">
        <h1>Popular Cities for Universities</h1>
        <p>
          Explore top cities in Ethiopia known for their world-class
          universities, vibrant student life, and academic opportunities!
        </p>
      </div>
      {universityData.length > 0 && (
        <Swiper
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            500: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide key={popular_cities[0].id} className="city-card">
            <div className="city-card-image">
              <img
                src={popular_cities[0].cityImage}
                alt={popular_cities[0].name}
              />
              <h2 className="city-name">{popular_cities[0].cityName}</h2>
            </div>
          </SwiperSlide>

          <SwiperSlide key={popular_cities[1].id} className="city-card">
            <div className="city-card-image">
              <img
                src={popular_cities[1].cityImage}
                alt={popular_cities[1].name}
              />
              <h2 className="city-name">{popular_cities[1].cityName}</h2>
            </div>
          </SwiperSlide>

          <SwiperSlide key={popular_cities[2].id} className="city-card">
            <div className="city-card-image">
              <img
                src={popular_cities[2].cityImage}
                alt={popular_cities[2].name}
              />
              <h2 className="city-name">{popular_cities[2].cityName}</h2>
            </div>
          </SwiperSlide>

          <SwiperSlide key={popular_cities[3].id} className="city-card">
            <div className="city-card-image">
              <img
                src={popular_cities[3].cityImage}
                alt={popular_cities[3].name}
              />
              <h2 className="city-name">{popular_cities[3].cityName}</h2>
            </div>
          </SwiperSlide>

          <SwiperSlide key={popular_cities[4].id} className="city-card">
            <div className="city-card-image">
              <img
                src={popular_cities[4].cityImage}
                alt={popular_cities[4].name}
              />
              <h2 className="city-name">{popular_cities[4].cityName}</h2>
            </div>
          </SwiperSlide>

          <SwiperSlide key={popular_cities[5].id} className="city-card">
            <div className="city-card-image">
              <img
                src={popular_cities[5].cityImage}
                alt={popular_cities[5].name}
              />
              <h2 className="city-name">{popular_cities[5].cityName}</h2>
            </div>
          </SwiperSlide>

          <SwiperSlide key={popular_cities[6].id} className="city-card">
            <div className="city-card-image">
              <img
                src={popular_cities[6].cityImage}
                alt={popular_cities[6].name}
              />
              <h2 className="city-name">{popular_cities[6].cityName}</h2>
            </div>
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  );
};

export default City;
