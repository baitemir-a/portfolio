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
          src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg"
          alt="Work 1"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <img
          src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
          alt="Work 2"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <img
          src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg"
          alt="Work 3"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default WorksSlider;
