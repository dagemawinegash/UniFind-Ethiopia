import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./City.css";
import { Pagination, Navigation } from "swiper/modules";
import { universityData } from "../../../universities";

const City = () => {
  return (
    <>
      <div className="cities-title">
        <h1>Popular Cities for Universities</h1>
        <p>
          Explore top cities in Ethiopia known for their world-class
          universities, vibrant student life, and academic opportunities!
        </p>
      </div>
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
            <img src={universityData[0].image} alt={universityData[0].name} />
            <h2 className="city-name">California</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide key={universityData[0].id} className="city-card">
          <div className="city-card-image">
            <img src={universityData[0].image} alt={universityData[0].name} />
            <h2 className="city-name">California</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide key={universityData[0].id} className="city-card">
          <div className="city-card-image">
            <img src={universityData[0].image} alt={universityData[0].name} />
            <h2 className="city-name">California</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide key={universityData[0].id} className="city-card">
          <div className="city-card-image">
            <img src={universityData[0].image} alt={universityData[0].name} />
            <h2 className="city-name">California</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};

export default City;
