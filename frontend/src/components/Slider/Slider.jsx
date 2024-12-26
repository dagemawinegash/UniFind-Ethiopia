import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import "./Slider.css";

const Slider = ({ universityData }) => {
  return (
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
      {universityData.map((uni) => (
        <SwiperSlide key={uni.image}>
          <img src={uni.image} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
