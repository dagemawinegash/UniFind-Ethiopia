import universityData from "../../../universities.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import "./Popular.css";
import { Link } from "react-router-dom";
export default function Popular() {
  return (
    <div name="popular">
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
        <SwiperSlide key={universityData[0].id} className="swipe-slide">
          <Link to={`/university/${universityData[0].id}`} className="link">
            <img src={universityData[0].image} alt={universityData[0].name} />
          </Link>
        </SwiperSlide>
        <SwiperSlide key={universityData[1].id} className="swipe-slide">
          <Link to={`/university/${universityData[1].id}`} className="link">
            <img src={universityData[1].image} alt={universityData[1].name} />
          </Link>
        </SwiperSlide>
        <SwiperSlide key={universityData[2].id} className="swipe-slide">
          <Link to={`/university/${universityData[2].id}`} className="link">
            <img src={universityData[2].image} alt={universityData[2].name} />
          </Link>
        </SwiperSlide>
        <SwiperSlide key={universityData[3].id} className="swipe-slide">
          <Link to={`/university/${universityData[3].id}`} className="link">
            <img src={universityData[3].image} alt={universityData[3].name} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}
