import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"; // Correct import
import "swiper/swiper-bundle.css";
import styles from "./WorksSlider.module.scss"; // Import your custom CSS
import "./custom.scss"
const WorksSlider: React.FC = () => {
  return (
    <Swiper
    className={styles.WorksSlider}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true} // Enable navigation
      pagination={{ clickable: true }} // Enable clickable pagination
      scrollbar={{ draggable: true }} // Enable draggable scrollbar
      modules={[Navigation, Pagination, Scrollbar, A11y]} // Pass modules correctly
    >
      <SwiperSlide className={styles.slide}>
        <img
          src="https://fakinstudio.com/storage/6/responsive-images/hQC00JJB2PmFvyjBRIwMoC3uPWTuDlzgL0bPnZZ6___webp_1748_1094.webp"
          alt="Work 1"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <img
          src="https://fakinstudio.com/storage/5/responsive-images/L9Tn5zQShsbZetHCgPobD174eTxxdemVx7iophkb___webp_1748_1094.webp"
          alt="Work 2"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <img
          src="https://fakinstudio.com/storage/11/responsive-images/u9iFmNevD2woeNU5bColNGntoEqmqTaRSc3XtOor___webp_1748_1094.webp"
          alt="Work 3"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default WorksSlider;
