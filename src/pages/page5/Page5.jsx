import Data from "../../data/Data";
import verified from "../../assets/verified.png";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./page5.scss";


import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
const Page5 = () => {
  const [isInnerWidthLessThan500, setIsInnerWidthLessThan500] = useState(false);
  const slideperview = isInnerWidthLessThan500 ? "1" : "2";
  useEffect(() => {
    const handleResize = () => {
      setIsInnerWidthLessThan500(window.innerWidth < 500);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="page5">
      <Swiper
        spaceBetween={20}
        centeredSlides={false}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        slidesPerView={slideperview}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
          dynamicMainBullets: 7,
        }}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* <img src={slide_image_1} alt="pic1" className="photos" /> */}
          <div className="left-box">
            <div className="flags">
              <div className="left-flag"></div>
              <div className="right-flag"></div>
            </div>
            <div className="five-stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="para5">
              One of the standout features of this gaming website is its
              extensive library of game guides and tutorials. It has helped me
              level up my skills, conquer challenging quests, and discover
              hidden secrets within games. The guides are comprehensive, easy to
              follow, and have undoubtedly elevated my gaming performance.
            </p>
            <div className="line"></div>

            <div className="user-5">
              <div className="profile">
                <img
                  className="profile-image-5"
                  src={Data[0].user_image}
                  alt=""
                />
                <div className="detail-5">
                  <h5>{Data[0].user_name}</h5>
                  <h6 className="cmpny-5">{Data[0].company}</h6>
                </div>
              </div>
              <div className="verified">
                <div className="tick">
                  <img src={verified} alt="" />
                </div>{" "}
                <span>Verified</span>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {/* <img src={slide_image_2} alt="pic2" className="photos" /> */}
          <div className="right-box">
            <div className="flags">
              <div className="left-flag"></div>
              <div className="right-flag"></div>
            </div>
            <div className="five-stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="para5">
              One of the standout features of this gaming website is its
              extensive library of game guides and tutorials. It has helped me
              level up my skills, conquer challenging quests, and discover
              hidden secrets within games. The guides are comprehensive, easy to
              follow, and have undoubtedly elevated my gaming performance.
            </p>
            <div className="line"></div>

            <div className="user-5">
              <div className="profile">
                <img
                  className="profile-image-5"
                  src={Data[0].user_image}
                  alt=""
                />
                <div className="detail-5">
                  <h5>{Data[0].user_name}</h5>
                  <h6 className="cmpny-5">{Data[0].company}</h6>
                </div>
              </div>
              <div className="verified">
                <div className="tick">
                  <img src={verified} alt="" />
                </div>{" "}
                <span>Verified</span>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {/* <img src={slide_image_1} alt="pic1" className="photos" /> */}
          <div className="left-box">
            <div className="flags">
              <div className="left-flag"></div>
              <div className="right-flag"></div>
            </div>
            <div className="five-stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="para5">
              One of the standout features of this gaming website is its
              extensive library of game guides and tutorials. It has helped me
              level up my skills, conquer challenging quests, and discover
              hidden secrets within games. The guides are comprehensive, easy to
              follow, and have undoubtedly elevated my gaming performance.
            </p>
            <div className="line"></div>

            <div className="user-5">
              <div className="profile">
                <img
                  className="profile-image-5"
                  src={Data[0].user_image}
                  alt=""
                />
                <div className="detail-5">
                  <h5>{Data[0].user_name}</h5>
                  <h6 className="cmpny-5">{Data[0].company}</h6>
                </div>
              </div>
              <div className="verified">
                <div className="tick">
                  <img src={verified} alt="" />
                </div>{" "}
                <span>Verified</span>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {/* <img src={slide_image_2} alt="pic2" className="photos" /> */}
          <div className="right-box">
            <div className="flags">
              <div className="left-flag"></div>
              <div className="right-flag"></div>
            </div>
            <div className="five-stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="para5">
              One of the standout features of this gaming website is its
              extensive library of game guides and tutorials. It has helped me
              level up my skills, conquer challenging quests, and discover
              hidden secrets within games. The guides are comprehensive, easy to
              follow, and have undoubtedly elevated my gaming performance.
            </p>
            <div className="line"></div>

            <div className="user-5">
              <div className="profile">
                <img
                  className="profile-image-5"
                  src={Data[0].user_image}
                  alt=""
                />
                <div className="detail-5">
                  <h5>{Data[0].user_name}</h5>
                  <h6 className="cmpny-5">{Data[0].company}</h6>
                </div>
              </div>
              <div className="verified">
                <div className="tick">
                  <img src={verified} alt="" />
                </div>{" "}
                <span>Verified</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Page5;
