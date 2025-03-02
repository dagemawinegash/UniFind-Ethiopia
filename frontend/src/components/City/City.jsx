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
          <SwiperSlide key={universityData[0].id} className="city-card">
            <div className="city-card-image">
              <img
                src={universityData[0].cityImage}
                alt={universityData[0].name}
              />
              <h2 className="city-name">{universityData[0].cityName}</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide key={universityData[1].id} className="city-card">
            <div className="city-card-image">
              <img
                src={universityData[1].cityImage}
                alt={universityData[1].name}
              />
              <h2 className="city-name">{universityData[1].cityName}</h2>
            </div>
          </SwiperSlide>

          <SwiperSlide key={universityData[9].id} className="city-card">
            <div className="city-card-image">
              <img
                src={universityData[9].cityImage}
                alt={universityData[9].name}
              />
              <h2 className="city-name">{universityData[9].cityName}</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide key={universityData[18].id} className="city-card">
            <div className="city-card-image">
              <img
                src={universityData[18].cityImage}
                alt={universityData[18].name}
              />
              <h2 className="city-name">{universityData[18].cityName}</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide key={universityData[20].id} className="city-card">
            <div className="city-card-image">
              <img
                src={universityData[20].cityImage}
                alt={universityData[20].name}
              />
              <h2 className="city-name">{universityData[20].cityName}</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide key={universityData[22].id} className="city-card">
            <div className="city-card-image">
              <img
                src={universityData[22].cityImage}
                alt={universityData[22].name}
              />
              <h2 className="city-name">{universityData[22].cityName}</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide key={universityData[29].id} className="city-card">
            <div className="city-card-image">
              <img
                src={universityData[29].cityImage}
                alt={universityData[29].name}
              />
              <h2 className="city-name">{universityData[29].cityName}</h2>
            </div>
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  );
};

export default City;
