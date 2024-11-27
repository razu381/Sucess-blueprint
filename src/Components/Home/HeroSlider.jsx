import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination } from "swiper/modules";

function HeroSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(/slide1bg.svg)",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-lg">
              <h1 className="mb-5 text-5xl font-bold text-white">
                Discover Your Path
              </h1>
              <p className="mb-5 text-white">
                Unlock your true potential with expert career counseling.
                Explore personalized guidance, resources, and tools to navigate
                your professional journey with confidence.
              </p>
              <button className="btn bg-success-dark text-white border-none">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(/slide2bg.svg)",
          }}
        >
          <div className=""></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-lg">
              <h1 className="mb-5 text-5xl font-bold text-white">
                Shape Your Future
              </h1>
              <p className="mb-5 text-white">
                Find clarity in your career decisions with tailored advice and
                insights. Your aspirations deserve the right direction—start
                building your dream future today.
              </p>
              <button className="btn bg-success-dark text-white border-none">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(/slide3bg.svg)",
          }}
        >
          <div className=""></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-lg">
              <h1 className="mb-5 text-5xl font-bold text-white">
                Empowering Career Choices
              </h1>
              <p className="mb-5 text-white">
                Connect with career experts and access top-notch resources to
                make informed decisions. Your success starts with the right
                guidance—let’s take the first step together.
              </p>
              <button className="btn bg-success-dark text-white border-none">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default HeroSlider;