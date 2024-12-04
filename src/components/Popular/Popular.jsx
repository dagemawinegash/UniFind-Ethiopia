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
              src={universityData[0].universityImage}
              alt={universityData[0].name}
            />
            <span className="popular-card-location">{universityData[0].location}</span>
          </Link>
          <div className="popular-card-body">
            <h3>{universityData[0].name}</h3>
            <p>{universityData[0].type} {universityData[0].duration}</p>
          </div>
        </SwiperSlide>

        <SwiperSlide key={universityData[0].id} className="popular-card">
          <Link
            to={`/university/${universityData[0].id}`}
            className="popular-card-image"
          >
            <img src={universityData[0].image} alt={universityData[0].name} />
            <span className="popular-card-location">4-KILO, AA</span>
          </Link>
          <div className="popular-card-body">
            <h3>{universityData[0].name}</h3>
            <p>Private 4 Year</p>
          </div>
        </SwiperSlide>

        <SwiperSlide key={universityData[0].id} className="popular-card">
          <Link
            to={`/university/${universityData[0].id}`}
            className="popular-card-image"
          >
            <img src={universityData[0].image} alt={universityData[0].name} />
            <span className="popular-card-location">4-KILO, AA</span>
          </Link>
          <div className="popular-card-body">
            <h3>{universityData[0].name}</h3>
            <p>Private 4 Year</p>
          </div>
        </SwiperSlide>

        <SwiperSlide key={universityData[0].id} className="popular-card">
          <Link
            to={`/university/${universityData[0].id}`}
            className="popular-card-image"
          >
            <img src={universityData[0].image} alt={universityData[0].name} />
            <span className="popular-card-location">4-KILO, AA</span>
          </Link>
          <div className="popular-card-body">
            <h3>{universityData[0].name}</h3>
            <p>Private 4 Year</p>
          </div>
        </SwiperSlide>

        <SwiperSlide key={universityData[0].id} className="popular-card">
          <Link
            to={`/university/${universityData[0].id}`}
            className="popular-card-image"
          >
            <img src={universityData[0].image} alt={universityData[0].name} />
            <span className="popular-card-location">4-KILO, AA</span>
          </Link>
          <div className="popular-card-body">
            <h3>{universityData[0].name}</h3>
            <p>Private 4 Year</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key={universityData[0].id} className="popular-card">
          <Link
            to={`/university/${universityData[0].id}`}
            className="popular-card-image"
          >
            <img src={universityData[0].image} alt={universityData[0].name} />
            <span className="popular-card-location">4-KILO, AA</span>
          </Link>
          <div className="popular-card-body">
            <h3>{universityData[0].name}</h3>
            <p>Private 4 Year</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key={universityData[0].id} className="popular-card">
          <Link
            to={`/university/${universityData[0].id}`}
            className="popular-card-image"
          >
            <img src={universityData[0].image} alt={universityData[0].name} />
            <span className="popular-card-location">4-KILO, AA</span>
          </Link>
          <div className="popular-card-body">
            <h3>{universityData[0].name}</h3>
            <p>Private 4 Year</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key={universityData[0].id} className="popular-card">
          <Link
            to={`/university/${universityData[0].id}`}
            className="popular-card-image"
          >
            <img src={universityData[0].image} alt={universityData[0].name} />
            <span className="popular-card-location">4-KILO, AA</span>
          </Link>
          <div className="popular-card-body">
            <h3>{universityData[0].name}</h3>
            <p>Private 4 Year</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key={universityData[0].id} className="popular-card">
          <Link
            to={`/university/${universityData[0].id}`}
            className="popular-card-image"
          >
            <img src={universityData[0].image} alt={universityData[0].name} />
            <span className="popular-card-location">4-KILO, AA</span>
          </Link>
          <div className="popular-card-body">
            <h3>{universityData[0].name}</h3>
            <p>Private 4 Year</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
