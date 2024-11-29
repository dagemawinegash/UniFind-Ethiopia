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
        <h1>Popular Colleges</h1>
        <h4>Explore here:</h4>
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
        <SwiperSlide key={universityData[0].id} className="card">
          <Link
            to={`/university/${universityData[0].id}`}
            className="card-image"
          >
            <img src={universityData[0].image} alt={universityData[0].name} />
            <span className="card-location">Stanford, CA</span>
          </Link>
          <div className="card-body">
            <h3>{universityData[0].name}</h3>
            <p>Private 4 Year</p>
          </div>
        </SwiperSlide>

        <SwiperSlide key={universityData[0].id} className="card">
          <Link
            to={`/university/${universityData[0].id}`}
            className="card-image"
          >
            <img src={universityData[0].image} alt={universityData[0].name} />
            <span className="card-location">Stanford, CA</span>
          </Link>
          <div className="card-body">
            <h3>{universityData[0].name}</h3>
            <p>Public 4 Year</p>
          </div>
        </SwiperSlide>

        <SwiperSlide key={universityData[0].id} className="card">
          <Link
            to={`/university/${universityData[0].id}`}
            className="card-image"
          >
            <img src={universityData[0].image} alt={universityData[0].name} />
            <span className="card-location">Stanford, CA</span>
          </Link>
          <div className="card-body">
            <h3>{universityData[0].name}</h3>
            <p>Private 4 Year</p>
          </div>
        </SwiperSlide>

        <SwiperSlide key={universityData[0].id} className="card">
          <Link
            to={`/university/${universityData[0].id}`}
            className="card-image"
          >
            <img src={universityData[0].image} alt={universityData[0].name} />
            <span className="card-location">Stanford, CA</span>
          </Link>
          <div className="card-body">
            <h3>{universityData[0].name}</h3>
            <p>Private 4 Year</p>
          </div>
        </SwiperSlide>

        <SwiperSlide key={universityData[0].id} className="card">
          <Link
            to={`/university/${universityData[0].id}`}
            className="card-image"
          >
            <img src={universityData[0].image} alt={universityData[0].name} />
            <span className="card-location">Stanford, CA</span>
          </Link>
          <div className="card-body">
            <h3>{universityData[0].name}</h3>
            <p>Public 4 Year</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key={universityData[0].id} className="card">
          <Link
            to={`/university/${universityData[0].id}`}
            className="card-image"
          >
            <img src={universityData[0].image} alt={universityData[0].name} />
            <span className="card-location">Stanford, CA</span>
          </Link>
          <div className="card-body">
            <h3>{universityData[0].name}</h3>
            <p>Public 4 Year</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key={universityData[0].id} className="card">
          <Link
            to={`/university/${universityData[0].id}`}
            className="card-image"
          >
            <img src={universityData[0].image} alt={universityData[0].name} />
            <span className="card-location">Stanford, CA</span>
          </Link>
          <div className="card-body">
            <h3>{universityData[0].name}</h3>
            <p>Public 4 Year</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key={universityData[0].id} className="card">
          <Link
            to={`/university/${universityData[0].id}`}
            className="card-image"
          >
            <img src={universityData[0].image} alt={universityData[0].name} />
            <span className="card-location">Stanford, CA</span>
          </Link>
          <div className="card-body">
            <h3>{universityData[0].name}</h3>
            <p>Public 4 Year</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key={universityData[0].id} className="card">
          <Link
            to={`/university/${universityData[0].id}`}
            className="card-image"
          >
            <img src={universityData[0].image} alt={universityData[0].name} />
            <span className="card-location">Stanford, CA</span>
          </Link>
          <div className="card-body">
            <h3>{universityData[0].name}</h3>
            <p>Public 4 Year</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
