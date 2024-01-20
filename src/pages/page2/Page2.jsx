import "../page2/Page2.scss";
import star1 from "../../assets/Group.png";
import logo from "../../assets/logo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";


import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";

const Page2 = () => {
  return (
    <>
      <div className="page2">
        <h1>
          choose your <br /> <span className="explore">favourite </span>game
        </h1>
        <p className="para1">
          Offer sneak peeks and previews of upcoming games, including trailers,
          screenshots, and information about release.
        </p>
        <Swiper
          spaceBetween={80}
          centeredSlides={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          effect={"coverflow"}
          grabCursor={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: -50,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper-2"
        >
          <SwiperSlide>
            <div className="swiper-back">
            <img src={star1} alt="pic1" className="photos" />
            <img className="logo-slider" src={logo} alt="" />
             <div className="slider-bottom">sneak peak </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="swiper-back">
            <img src={star1} alt="pic1" className="photos" />
            <img className="logo-slider" src={logo} alt="" />
            <div className="slider-bottom">sneak peak </div>

            
            </div>          </SwiperSlide>
          <SwiperSlide>
          <div className="swiper-back">
            <img src={star1} alt="pic1" className="photos" />
            <img className="logo-slider" src={logo} alt="" />
            <div className="slider-bottom">sneak peak </div>

              
            </div>          </SwiperSlide>
          <SwiperSlide>
          <div className="swiper-back">
            <img src={star1} alt="pic1" className="photos" />
            <img className="logo-slider" src={logo} alt="" />
            <div className="slider-bottom">sneak peak </div>

              
            </div>          </SwiperSlide>
          <SwiperSlide>
          <div className="swiper-back">
            <img src={star1} alt="pic1" className="photos" />
            <img className="logo-slider" src={logo} alt="" />
            <div className="slider-bottom">sneak peak </div>

             
            </div>          </SwiperSlide>
          <SwiperSlide>
          <div className="swiper-back">
            <img src={star1} alt="pic1" className="photos" />
            <img className="logo-slider" src={logo} alt="" />
            <div className="slider-bottom">sneak peak </div>

             
            </div>          </SwiperSlide>
        </Swiper>
        <div className="btns-2">
          <button className="btn-gradient-2">
            <div className="btn-name-2">buy now</div>
          </button>
          <button className="btn-stroke-2">
            <div className="btn-name-gradient-2">play now</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Page2;
